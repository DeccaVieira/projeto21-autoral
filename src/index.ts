import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router";

dotenv.config();
const app = express();
app.use(cors()).use(express.json()).use(router);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running in Port: 4000`);
});
