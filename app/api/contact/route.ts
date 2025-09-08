import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioMessageTemplate } from "@/lib/emailTemplates"; // ✅ import template

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Rohan Katkam <rohankatkam@resend.dev>", // must be verified in Resend
      to: `${process.env.EMAIL_ADDRESS}`, // ✅ your email
      subject: `New message from ${name}`,
      html: portfolioMessageTemplate(name, email, message), // ✅ use template
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
