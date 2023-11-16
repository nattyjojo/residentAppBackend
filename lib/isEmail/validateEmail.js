import Verifier from "email-verifier";
import dotenv from "dotenv";

dotenv.config();

const ValidateEmail = (email) => {
  return new Promise((resolve, reject) => {
    const verifier = new Verifier(process.env.EMAIL_VERIFICATION_Key, {
      retries: 2,
    });
    verifier.verify(email, (err, data) => {
      if (err) {
        reject(err);
      }
      if (
        data.formatCheck === "true" &&
        data.smtpCheck === "true" &&
        data.dnsCheck === "true"
      ) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
export default ValidateEmail;
