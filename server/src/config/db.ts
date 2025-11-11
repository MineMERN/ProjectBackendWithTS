import mongoose from "mongoose";
import { env } from "../utils/env";

export const connectDB = mongoose.connect(`${env.MONGO_URL}`);