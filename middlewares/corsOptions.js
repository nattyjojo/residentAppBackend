const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5000/admin",
  "localhost",
];

const corsOptions = {
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
