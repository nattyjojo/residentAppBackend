import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const emailSender = async (Reciever, Subject, Body) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: `"Foyer Resident 👻"<${process.env.ADMIN_EMAIL}>`,
      to: Reciever,
      subject: Subject,
      html: Body,
    });
    return info;
  } catch (err) {
    console.log(err);
  }
};
export default emailSender;
