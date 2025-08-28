"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

// ----- utility hooks (same as before) -----
export const useAnimationFrame = (
  callback: (timestamp: number) => void,
  enabled: boolean = true
) => {
  const requestRef = useRef<number>(undefined);
  const enabledRef = useRef<boolean>(enabled);
  const callbackRef = useRef<(timestamp: number) => void>(callback);

  useEffect(() => {
    enabledRef.current = enabled;
  }, [enabled]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const animate = (time: number) => {
      if (enabledRef.current) {
        callbackRef.current(time);
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);
};

export const useMousePositionRef = (
  containerRef: React.RefObject<HTMLElement>
) => {
  const mousePos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      let clientX: number, clientY: number;

      if (event instanceof TouchEvent) {
        clientX = event.touches[0]?.clientX ?? 0;
        clientY = event.touches[0]?.clientY ?? 0;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }

      mousePos.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("touchmove", handleMouseMove);
    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("touchmove", handleMouseMove);
    };
  }, [containerRef]);

  return mousePos;
};

// ----- color interpolation helper -----
const interpolateColor = (
  fromColor: string,
  toColor: string,
  t: number
): string => {
  // convert hex → rgb
  const hexToRgb = (hex: string) => {
    const cleanHex = hex.replace("#", "");
    const bigint = parseInt(cleanHex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const from = hexToRgb(fromColor);
  const to = hexToRgb(toColor);

  const r = Math.round(from.r + (to.r - from.r) * t);
  const g = Math.round(from.g + (to.g - from.g) * t);
  const b = Math.round(from.b + (to.b - from.b) * t);

  return `rgb(${r}, ${g}, ${b})`;
};

// ----- main component -----
export const VariableProximity = ({
  label,
  fromFontVariationSettings,
  toFontVariationSettings,
  fromColor = "#000000", // 👈 new
  toColor = "#00ffff", // 👈 new
  containerRef,
  radius = 120,
  falloff = "gaussian",
  className,
}: {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  fromColor?: string;
  toColor?: string;
  containerRef: React.RefObject<HTMLElement>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
}) => {
  const mousePos = useMousePositionRef(containerRef);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const fromSettings = Object.fromEntries(
    fromFontVariationSettings.split(",").map((setting) => {
      const [axis, value] = setting.trim().split(" ");
      return [axis.replace(/['"]/g, ""), parseFloat(value)];
    })
  );

  const toSettings = Object.fromEntries(
    toFontVariationSettings.split(",").map((setting) => {
      const [axis, value] = setting.trim().split(" ");
      return [axis.replace(/['"]/g, ""), parseFloat(value)];
    })
  );

  useAnimationFrame(() => {
    if (!mousePos.current) return;

    spansRef.current.forEach((span) => {
      if (!span) return;
      const rect = span.getBoundingClientRect();
      const spanCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      const dx =
        spanCenter.x -
        (mousePos.current!.x +
          containerRef.current!.getBoundingClientRect().left);
      const dy =
        spanCenter.y -
        (mousePos.current!.y +
          containerRef.current!.getBoundingClientRect().top);
      const distance = Math.sqrt(dx * dx + dy * dy);

      const t = Math.max(0, 1 - distance / radius);
      let falloffValue = 0;
      switch (falloff) {
        case "linear":
          falloffValue = t;
          break;
        case "exponential":
          falloffValue = t * t;
          break;
        case "gaussian":
          falloffValue = Math.exp(
            -((distance * distance) / (2 * radius * radius))
          );
          break;
      }

      const settings = Object.entries(fromSettings)
        .map(([axis, fromValue]) => {
          const toValue = toSettings[axis];
          const value = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${value}`;
        })
        .join(", ");

      const color = interpolateColor(fromColor, toColor, falloffValue);

      span.style.fontVariationSettings = settings;
      span.style.color = color;
    });
  }, true);

  return (
    <span className={className} aria-label={label}>
      {label.split("").map((char, i) => (
        <motion.span
          ref={(el) => { spansRef.current[i] = el; }}
          key={i}
          aria-hidden="true"
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
};
