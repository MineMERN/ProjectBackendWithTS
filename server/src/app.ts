import e from "express";
import dotenv from "dotenv";
import { route } from "./routes/auth.route";
import { dashboardRoute, profileRoute } from "./routes/dashboard.route";

const app = e();
dotenv.config();
app.use(e.json());
app.use("/", route);
app.use("/dashboard", dashboardRoute);
app.use("/user", profileRoute)

export { app };