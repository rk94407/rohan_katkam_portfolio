import { useEffect, useState } from "react";
import LogoLoop from "./LogoLoop";

import Image from "next/image";

const techLogos = [
  {
    node: (
      <Image src="./icons/react.svg" alt="React Logo" width={40} height={40} />
    ),
    title: "React",
    href: "https://react.dev",
  },
  {
    node: (
      <Image
        src="./icons/nextjs.svg"
        alt="Next.js Logo"
        width={40}
        height={40}
      />
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: (
      <Image
      src="./icons/tailwind.svg"
        alt="Tailwind CSS Logo"
        width={40}
        height={40}
      />
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  }
];

export function Example() {
  const [size, setSize] = useState({ logoHeight: 28, gap: 16 });

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSize({ logoHeight: 28, gap: 16 });
      else if (window.innerWidth < 1024) setSize({ logoHeight: 40, gap: 28 });
      else setSize({ logoHeight: 50, gap: 40 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ height: "180px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={size.logoHeight}
        gap={size.gap}
        pauseOnHover={false}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
