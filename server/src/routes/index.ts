import express, { Router } from "express";
import dalle from "./dalle.routes";

const router = express.Router();

export default (): Router => {
  dalle(router);
  return router;
};
