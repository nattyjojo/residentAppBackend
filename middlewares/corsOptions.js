const corsOptions = {
  origin: ["https://residentapp.johnchimezie.online", "http://localhost:3000"],
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  credentials: true,
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};
export default corsOptions;
