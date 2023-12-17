import { Router } from "express";
import controller from "../controllers";

const router = Router();

const {
  auth: { signup, signin },
} = controller;

// signup
router.post("/signup", signup);

// signin
router.post("/signin", signin);

export default router;
