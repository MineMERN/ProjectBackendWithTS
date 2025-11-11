import { signupAuth,loginAuth } from "../middleware/auth.middleware";
import { upload, localUpload } from "../controllers/upload.controller";
import { Router } from "express";
import { signup, login } from "../controllers/auth.controller";

export const route = Router();

route.post("/sign", signupAuth, signup);
route.post("/login", loginAuth, login);
route.post("/upload", upload.single("file"), localUpload);