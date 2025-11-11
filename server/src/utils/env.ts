export const env = {
    PORT: process.env.PORT  || 3000,
    MONGO_URL: process.env.MONGO_URL,
    SALT_WORK_FACTOR: process.env.SALT_WORK_FACTOR,
    SECRET_KEY: process.env.SECRET_KEY,
    EXPIRE_IN: process.env.EXPIRE_IN,
}