import dotenv from "dotenv";
dotenv.config();
export const env = {
    PORT: process.env.PORT  || 3000,
    MONGO_URL: process.env.MONGO_URL,
    SALT_WORK_FACTOR: process.env.SALT_WORK_FACTOR,
    SECRET_KEY: process.env.SECRET_KEY,
    EXPIRE_IN: process.env.EXPIRE_IN,
    CLODINARY_API_KEY: process.env.CLODINARY_API_KEY,
    CLODINARY_SECRETE_KEY: process.env.CLODINARY_SECRETE_KEY,
    CLODINARY_NAME: process.env.CLODINARY_NAME,
}