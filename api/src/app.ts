import express from "express";
import config from "./config";
import morgan from "morgan";
import videoRoutes from "./routes/videos.routes";
import cors from "cors";

const app = express();

app.use(cors());
app.set("port", config.PORT);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videoRoutes);
export default app;
