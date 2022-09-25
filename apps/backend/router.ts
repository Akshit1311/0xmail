import express from "express";
const router = express.Router();
import { store } from "./store";
router.post("/post", store);
export default router;
