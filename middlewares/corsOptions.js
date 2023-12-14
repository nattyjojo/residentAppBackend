const allowedOrigins = [
  `http://localhost:3000`,
  "https://funny-madeleine-e88430.netlify.app",
  "http://localhost:3000/login",
  "http://localhost:5000",
  "http://localhost:3000/admin",
];

const corsOptions = {
  //   origin: "*", // Allow all origins
  //   // ... other options
  //   credentials: true,
  // };

  origin: function (origin, callback) {
    console.log({ origin: origin });

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      //callback(null, true);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
export default corsOptions;
