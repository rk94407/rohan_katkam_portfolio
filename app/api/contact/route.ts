import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioMessageTemplate } from "@/lib/emailTemplates";
import { userConfirmationTemplate } from "@/lib/userConfirmationTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await Promise.all([
      // Email to you
      resend.emails.send({
        from: "Rohan Katkam <rohankatkam@resend.dev>",
        to: process.env.EMAIL_ADDRESS || "rohankatkam1698@gmail.com",
        subject: `New message from ${name}`,
        html: portfolioMessageTemplate(name, email, message),
      }),

      // Confirmation email to user
      resend.emails.send({
        from: "Rohan Katkam <rohankatkam@resend.dev>",
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        html: userConfirmationTemplate(name, email, message),
      }),
    ]);

    console.log(name, email, message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
