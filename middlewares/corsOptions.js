const corsOptions = {
  origin: ["https://dainty-selkie-5509f1.netlify.app"],
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  credentials: true,
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};
export default corsOptions;
