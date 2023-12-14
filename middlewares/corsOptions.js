const allowedOrigins = [
  "http://localhost:3000",
  "https://657ad870f0f6a8000860e6da--dainty-selkie-5509f1.netlify.app",
  " https://funny-madeleine-e88430.netlify.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log({ origin: origin });

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
export default corsOptions;
