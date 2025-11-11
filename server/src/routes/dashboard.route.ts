import { auth } from "../middleware/auth.middleware";
import { Router } from "express";
import { dashboard } from "../controllers/dashboard.controller";

export const dashboardRoute = Router();

dashboardRoute.post("/", auth, dashboard)