"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dalle = void 0;
require("dotenv/config");
const validateEnv_1 = __importDefault(require("../util/validateEnv"));
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: validateEnv_1.default.OPENAI_API_KEY,
});
const dalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { prompt } = req.body;
        const response = yield openai.images.generate({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });
        const image = response.data[0].b64_json;
        res.status(200).json({ photo: image });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.dalle = dalle;
