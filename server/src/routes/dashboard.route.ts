import { auth } from "../middleware/auth.middleware";
import { Router } from "express";
import { dashboard, createProfile  } from "../controllers/dashboard.controller";
import { upload } from "../middleware/multer.middleware";

export const dashboardRoute = Router();
export const profileRoute = Router();

dashboardRoute.post("/", auth, dashboard);
profileRoute.post("/createProfile", upload.single("image"), createProfile);