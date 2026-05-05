import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email, stage, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "noreply@tinythoughts.app",
      to: "darcyshema64@gmail.com",
      subject: "New inquiry from skedo.tech",
      text: `Email: ${email}\nStage: ${stage}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
