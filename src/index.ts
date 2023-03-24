import express from "express";
import cors from "cors";
import router from "./routes/router";


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running in Port: 4000`);
});

export default app;