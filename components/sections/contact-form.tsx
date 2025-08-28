import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import RotatingText from "../animations/rotating-text"

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-h-screen flex items-center justify-center", className)}
      {...props}
    >
      <Card className="overflow-hidden w-full max-w-md md:max-w-xl lg:max-w-2xl">
        <CardContent className="">
          <form className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center text-center mx-auto gap-3">
                <h1 className="text-4xl font-bold">Tell me about</h1>
                <div className="text-2xl font-semibold bg-blue-400/30 border border-blue-500/40 backdrop-blur-sm rounded px-2 py-1 w-50 flex items-center justify-center h-12 overflow-hidden">
                  <RotatingText
                    texts={[
                      "Job Opportunity",
                      "a bug",
                      "a feature",
                      "a web page",
                      "a project",
                      "or Connect",
                    ]}
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="name" placeholder="Your Name" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="message">Message</Label>
                </div>
                <Textarea id="textarea" placeholder="Message" required />
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="w-auto px-6">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
