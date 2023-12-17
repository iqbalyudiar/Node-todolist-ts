import { Router } from "express";
import controller from "../controllers";

const router = Router();

const {
  auth: { signup },
} = controller;

// signup
router.post("/signup", signup);

export default router;
