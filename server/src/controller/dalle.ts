import "dotenv/config";
import { RequestHandler } from "express";
import env from "../util/validateEnv";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const dalle: RequestHandler = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
