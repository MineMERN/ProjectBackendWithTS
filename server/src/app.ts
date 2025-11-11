import e from "express";
import dotenv from "dotenv";
import { route } from "./routes/auth.route";

const app = e();
dotenv.config();
app.use(e.json());
app.use("/", route);

export { app };