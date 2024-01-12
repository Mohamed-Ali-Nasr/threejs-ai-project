import { Router } from "express";
import { dalle } from "../controller/dalle";

export default (router: Router) => {
  router.get("/dalle", (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" });
  });
  router.post("/dalle", dalle);
};
