"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dalle_1 = require("../controller/dalle");
exports.default = (router) => {
    router.get("/dalle", (req, res) => {
        res.status(200).json({ message: "Hello from DALL.E ROUTES" });
    });
    router.post("/dalle", dalle_1.dalle);
};
