// File: lib/emailTemplates.ts

export const portfolioMessageTemplate = (
  name: string,
  email: string,
  message: string,
  linkedin = "https://www.linkedin.com/in/rohan-katkam-b3b1851b8/",
  github = "https://github.com/rk94407"
) => `
    <div style="padding:30px; font-family:Arial, sans-serif; text-align: center;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; 
                box-shadow:0 2px 6px rgba(0,0,0,0.1); padding:24px; border: 1px lightgray solid; align-items: center;">
        
        <h2 style="color:#111; margin-bottom:16px;">New Portfolio Message</h2>
        
        <p style="font-size:16px; margin:6px 0;"><strong>Name:</strong> ${name}</p>
        <p style="font-size:16px; margin:6px 0;"><strong>Email:</strong> ${email}</p>
        <p style="font-size:16px; margin:6px 0;"><strong>Message:</strong></p>
        
        <blockquote style="font-style:italic; margin:16px 0; color:#333;">
          ${message}
        </blockquote>

        <hr style="margin:24px 0; border:none; border-top:1px solid #ddd;" />

        <footer style="text-align:center; font-size:14px; color:#555;">
          <p style="margin-bottom:8px;">Connect with me:</p>
          <p>
            <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                   width="28" style="margin:0 8px;" alt="LinkedIn" />
            </a>
            <a href="${github}" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                   width="28" style="margin:0 8px;" alt="GitHub" />
            </a>
          </p>
          <p style="margin-top:12px; font-size:12px; color:#888;">
            © ${new Date().getFullYear()} Rohan Katkam • Portfolio Contact
          </p>
        </footer>
    </div>
  </div>
`;
