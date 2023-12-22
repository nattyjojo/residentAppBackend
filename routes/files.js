// import { Router } from "express";
// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const banner = Router();

// banner.use(
//   "/files/:imagePath",
//   express.static(path.dirname(__filename) + "/userFiles")
// );
// export default banner;
// banner.use("/files/:imagePath", (req, res, next) => {
//     console.log(path.dirname(__filename) + "/userFiles");
//     next();
//   });
import { Router } from "express";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const banner = Router();

banner.use(
  "/files/:imagePath",
  express.static(path.join(__dirname, "userFiles"))
);

export default banner;
