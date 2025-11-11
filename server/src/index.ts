import { app } from "./app";
import { connectDB } from "./config/db";
import { env } from "./utils/env";
const port = env.PORT;

connectDB.then(() => {
    console.log("MongoDB connected successfully")
    app.listen(port, () => {
        console.log(`App listen on https://localhost:${port}`)
    })
})