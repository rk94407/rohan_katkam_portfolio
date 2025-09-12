export const userConfirmationTemplate = (
  name: string,
  email: string,
  message: string,
  linkedin = "https://www.linkedin.com/in/rohan-katkam-b3b1851b8/",
  github = "https://github.com/rk94407",
  instagram = "https://www.instagram.com/katkamrohan/",
  youtube = "https://www.youtube.com/@rohankatkam1698"
) => `
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:16px 8px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="465" style="border:1px solid #eaeaea;border-radius:8px;padding:20px;">
          <tr>
            <td align="center">
              <!-- Heading -->
              <h1 style="margin:30px 0;font-size:24px;font-weight:400;text-align:center;color:#000000;">
                <strong>New Portfolio Message</strong>
              </h1>

              <!-- Greeting -->
              <p style="font-size:14px;color:#000000;line-height:24px;margin:16px 0;">
                Hello <strong>${name}</strong>,
              </p>

              <!-- Message body -->
              <p style="font-size:14px;color:#000000;line-height:24px;margin:16px 0;">
                Thank you for reaching out to <strong>My Portfolio</strong>. 
                If you have any questions or concerns, please don't hesitate to contact me.
              </p>

              <!-- Portfolio button -->
              <table align="center" cellpadding="0" cellspacing="0" style="margin:32px 0;text-align:center;">
                <tr>
                  <td>
                    <a href="https://rohan-katkam-portfolio.vercel.app"
                       target="_blank"
                       style="display:inline-block;padding:12px 20px;background-color:#000;color:#fff;text-decoration:none;font-weight:600;font-size:12px;border-radius:4px;">
                       Visit My Portfolio
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Direct link -->
              <p style="font-size:14px;color:#000000;line-height:24px;margin:16px 0;">
                Or copy and paste this URL into your browser: 
                <a href="https://rohan-katkam-portfolio.vercel.app" style="color:#2563eb;text-decoration:none;" target="_blank">
                  https://rohan-katkam-portfolio.vercel.app
                </a>
              </p>

              <hr style="border:none;border-top:1px solid #eaeaea;margin:26px 0;" />

              <!-- Social icons -->
              <footer style="text-align:center;font-size:14px;color:#555;">
                <p style="margin-bottom:8px;">Connect with me:</p>
                <p>
                  <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
                    <img src="https://files.svgcdn.io/streamline/linkedin.svg" 
                         width="28" style="margin:0 8px;" alt="LinkedIn" />
                  </a>
                  <a href="${github}" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                         width="28" style="margin:0 8px;" alt="GitHub" />
                  </a>
                  <a href="${instagram}" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" 
                         width="28" style="margin:0 8px;" alt="Instagram" />
                  </a>
                  <a href="${youtube}" target="_blank" rel="noopener noreferrer">
                    <img src="https://files.svgcdn.io/whh/youtube.svg" 
                         width="28" style="margin:0 8px;" alt="YouTube" />
                  </a>
                </p>
                <p style="margin-top:12px;font-size:12px;color:#888;">
                  © ${new Date().getFullYear()} Rohan Katkam • Portfolio Contact
                </p>
                <p style="margin-top:12px;font-size:12px;color:#888;">
                  This email was sent to you because you filled out the contact form on my portfolio website.
                </p>
              </footer>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;