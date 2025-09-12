"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import RotatingText from "../animations/rotating-text";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          id: toastId,
          duration: 3000, // auto close after 3s
        });
        form.reset();
      } else {
        const data = await response.json();
        toast.error(data.error || "❌ Something went wrong.", {
          id: toastId,
          duration: 5000,
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("❌ Network error! Please try again.", {
        id: toastId,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center px-4 gap-8",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center px-4">
        <h1
          className="
      text-3xl        /* Base size for very small screens */
      sm:text-3xl     /* Small devices (640px+) */
      md:text-4xl     /* Tablets (768px+) */
      lg:text-5xl     /* Laptops (1024px+) */
      xl:text-6xl     /* Large screens (1280px+) */
      font-bold 
      text-center
    "
        >
          Contact Me
        </h1>
      </div>
      <Card className="overflow-hidden w-full max-w-md md:max-w-xl lg:max-w-2xl backdrop-blur-xs bg-white/10 dark:bg-black/10 shadow-lg">
        <CardContent>
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Rotating title */}
              <div className="flex flex-col md:flex-row items-center text-center mx-auto gap-3">
                <h1 className="text-4xl font-bold">Tell me about</h1>
                <div className="text-2xl font-semibold bg-blue-400/30 border border-blue-500/40 backdrop-blur-sm rounded px-2 py-1 w-full md:w-60 flex items-center justify-center h-15 overflow-hidden">
                  <RotatingText
                    texts={[
                      "a Job Opportunity",
                      "a bug",
                      "a feature",
                      "a web page",
                      "a project",
                      "or Connect",
                    ]}
                  />
                </div>
              </div>

              {/* Name input */}
              <div className="grid gap-3">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email input */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Message textarea */}
              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-auto px-6"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
