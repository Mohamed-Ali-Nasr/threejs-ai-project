import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import http from "http";
import env from "./util/validateEnv";
import routes from "./routes";

/* Configuration */
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Creating Server */
const PORT = env.PORT;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

/* Routes */
app.use("/api/v1", routes());
