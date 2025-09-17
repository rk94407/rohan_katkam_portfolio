// File: lib/emailTemplates.ts

export const portfolioMessageTemplate = (
  name: string,
  email: string,
  message: string,
  linkedin = "https://www.linkedin.com/in/rohan-katkam-b3b1851b8/",
  github = "https://github.com/rk94407",
  instagram = "https://www.instagram.com/katkamrohan/",
  youtube = "https://www.youtube.com/@rohankatkam1698"
) => `
  <!-- Hidden preview text -->
<div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
  New message from your portfolio contact form
</div>

<!-- Outer container -->
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:16px 8px;">
  <tr>
    <td align="center">
      <!-- Responsive inner container -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" 
             style="max-width:465px;width:100%;border:1px solid #eaeaea;border-radius:8px;padding:20px;">
        <tr>
          <td align="center">
            
            <!-- Heading -->
            <h1 style="margin:30px 0;font-size:20px;font-weight:600;text-align:center;color:#000000;line-height:1.3;">
              <strong>${name} Contacted You</strong>
            </h1>

            <!-- Message body -->
            <p style="font-size:14px;color:#000000;line-height:24px;margin:16px 0;">
              You have received a new message from the contact form on your portfolio website.
              <br />
              From ${name} (${email}):
            </p>
            <p style="font-size:14px;color:#000000;line-height:24px;margin:16px 0;">
              ${message}
            </p>

            <!-- Divider -->
            <hr style="border:none;border-top:1px solid #eaeaea;margin:26px 0;" />

            <!-- Social icons -->
            <footer style="text-align:center;font-size:14px;color:#555;">
              <p style="margin-bottom:8px;">Connect with me:</p>
              <p style="display:flex;justify-content:center;flex-wrap:wrap;gap:12px;">
                <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
                  <img src="https://files.svgcdn.io/streamline/linkedin.svg" width="28" alt="LinkedIn" style="margin:0 4px;" />
                </a>
                <a href="${github}" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="28" alt="GitHub" style="margin:0 4px;" />
                </a>
                <a href="${instagram}" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" width="28" alt="Instagram" style="margin:0 4px;" />
                </a>
                <a href="${youtube}" target="_blank" rel="noopener noreferrer">
                  <img src="https://files.svgcdn.io/whh/youtube.svg" width="28" alt="YouTube" style="margin:0 4px;" />
                </a>
              </p>
              <p style="margin-top:12px;font-size:12px;color:#888;">
                © ${new Date().getFullYear()} Rohan Katkam • Portfolio Contact
              </p>
              <p style="margin-top:12px;font-size:12px;color:#888;">
                This email was sent automatically from your portfolio contact form.
              </p>
            </footer>

          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
