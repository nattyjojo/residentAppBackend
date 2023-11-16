import mongoose from "mongoose";
import dataBaseconection from "./connection.js";

const Code_Schema = new mongoose.Schema({
  code: String,
});
const CodeSchema = mongoose.model("CodeSchema ", Code_Schema);
export default CodeSchema;

// const generateCode = async () => {
//   const generatedCode = [];

//   for (let i = generatedCode.length; generatedCode.length !== 200; i++) {
//     const randomNumber = Math.floor(Math.random() * 10000) + 1000;

//     if (generatedCode.length < 31) {
//       const code = randomNumber + ":a";
//       if (!generatedCode.includes(code)) {
//         generatedCode.push(code);
//       }
//     } else {
//       generatedCode.length < 30;
//       const code = randomNumber + ":u";
//       if (!generatedCode.includes(code)) {
//         generatedCode.push(code);
//       }
//     }
//   }
//   try {
//     dataBaseconection();

//     for (let i = 0; i < generatedCode.length; i++) {
//       console.log(i);
//       await CodeSchema.create({ code: generatedCode[i] });
//       console.log("done");
//     }
//     // const deleteAll = await CodeSchema.deleteMany({});
//     console.log("finished");
//   } catch (err) {
//     console.log(err);
//   }
// };
// generateCode();
