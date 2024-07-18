import express from "express";

import {
  getAllMenu,
  getSingleMenu,
} from "../app/controllers/MenuController.js";
const router = express.Router();

router.get("/", getAllMenu);
router.get("/:id", getSingleMenu);

export default router;
