import "dotenv/config";

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://www.indosparsh.com",
    ],
    credentials: true,
    methods:[
      "GET",
      "POST"
    ],
    allowedHeaders:['Content-type', "Authorization", "multipart/form-data"]
  }),
);

// Route
import mailRoute from "./routes/mail.routes.js";
app.use("/api/v1", mailRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listen on ${PORT}`);
});
