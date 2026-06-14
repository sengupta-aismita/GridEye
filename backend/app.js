import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello world");

})

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ extended: true, limit:"16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
    cors({
        origin :process.env.CORS_ORIGIN || "http://localhost:5173",
        credentials: true,
        methods:["GET","POST","PUT","PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Authorization","Content-Type"],
    })
)

import healthCheckRouter from "./src/routes/healthcheck.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import sensorRouter from "./src/routes/sensor.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/sensor", sensorRouter)


export default app;