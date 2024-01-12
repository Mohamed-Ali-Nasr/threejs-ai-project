"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const validateEnv_1 = __importDefault(require("./util/validateEnv"));
const routes_1 = __importDefault(require("./routes"));
/* Configuration */
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "50mb" }));
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/* Creating Server */
const PORT = validateEnv_1.default.PORT;
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
/* Routes */
app.use("/api/v1", (0, routes_1.default)());
