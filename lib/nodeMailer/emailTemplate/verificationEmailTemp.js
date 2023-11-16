const verificationEmailTemp = (verificationLink) => {
  return ` <html>
        <head>
          <title>Email Verification</title>
        </head>
        <body>
          <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px;">
              <h2>Email Verification</h2>
              <p>Thank you for registering with our service. To verify your email address, please click the button below:</p>
              <a href="${verificationLink}" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Verify Email</a>
              <p>If the button above doesn't work, you can also copy and paste the following link into your web browser:</p>
              <p>${verificationLink}</p>
              <p>This link will expire in 24 hours, so please verify your email as soon as possible.</p>
              <p>If you didn't register on our platform, you can ignore this email.</p>
              <p>Thank you!</p>
            </div>
          </div>
        </body>
      </html>`;
};
export default verificationEmailTemp;
