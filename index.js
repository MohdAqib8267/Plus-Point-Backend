import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { expertiesRoute } from "./routes/expertiesRoute.js";
import { ourTeamRoute } from "./routes/ourTeamRoute.js";
import { ourVision } from "./routes/missionVisionRoute.js";
import { homeNewsRoute } from "./routes/homeNewsRoute.js";
import { mediaRoute } from "./routes/mediaRoute.js";
dotenv.config();

const PORT = process.env.PORT || 3000;


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})

app.use("/api/client",expertiesRoute);
app.use("/api/client",ourTeamRoute);
app.use("/api/client",ourVision);
app.use("/api/client",homeNewsRoute);
app.use("/api/client",mediaRoute);