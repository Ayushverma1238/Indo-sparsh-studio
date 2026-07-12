import { sendMail } from "../utils/sendMail.js";

export const contact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;
    console.log(req.body)
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: "New Contact Form",
      html: `
                
            <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
            <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">

                <div style="background:#1f2937; color:white; padding:20px;">
                <h2 style="margin:0;">📩 New Contact Request</h2>
                <p style="margin:8px 0 0; opacity:0.8;">
                    Someone submitted your website contact form.
                </p>
                </div>

                <div style="padding:25px;">

                <table style="width:100%; border-collapse:collapse;">
                    <tr>
                    <td style="padding:12px; font-weight:bold; width:150px;">👤 Name</td>
                    <td style="padding:12px;">${firstName} ${lastName}</td>
                    </tr>

                    <tr style="background:#f8fafc;">
                    <td style="padding:12px; font-weight:bold;">📧 Email</td>
                    <td style="padding:12px;">${email}</td>
                    </tr>

                    <tr>
                    <td style="padding:12px; font-weight:bold;">📞 Contact</td>
                    <td style="padding:12px;">${phone}</td>
                    </tr>
                </table>

                <div style="margin-top:25px;">
                    <h3 style="margin-bottom:10px;">💬 Message</h3>

                    <div style="background:#f9fafb; padding:18px; border-left:4px solid #2563eb; border-radius:6px;">
                    ${message}
                    </div>
                </div>

                </div>

                <div style="background:#f3f4f6; padding:15px; text-align:center; color:#666; font-size:13px;">
                Indo Sparsh Studio • Website Contact Form
                </div>

            </div>
            </div>

            `,
    });
    console.log("Rewsponsef")
    res.json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
