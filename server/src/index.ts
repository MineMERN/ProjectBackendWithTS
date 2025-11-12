import { app } from "./app";
import { connectDB } from "./config/db";
import { env } from "./utils/env";
const port = env.PORT;

// console.log(env.MONGO_URL)

//     app.listen(port, () => {
//         console.log(`App listen on https://localhost:${port}`)
//     })
connectDB.then(() => {
    console.log("MongoDB connected successfully")
    app.listen(port, () => {
        console.log(`App listen on https://localhost:${port}`)
    })
})