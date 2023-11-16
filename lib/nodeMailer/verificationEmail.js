import emailSender from "./emailSender.js";
import verificationEmailTemp from "./emailTemplate/verificationEmailTemp.js";
import newUuid from "../uuid/newUuid.js";

const verificationEmail = async (reciever) => {
  const link = `http://localhost:3000/verify-email/${newUuid()}`;
  const body = verificationEmailTemp(link);
  const subject = "Email Verification";
  await emailSender(reciever, subject, body);
  return emailSender;
};
export default verificationEmail;
