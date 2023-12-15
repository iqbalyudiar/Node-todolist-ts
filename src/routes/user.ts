import { Router } from "express";
import controller from "../controllers";

const router = Router();

const {
  user: { createUser },
} = controller;

// create user
router.post("/user", createUser);

export default router;
