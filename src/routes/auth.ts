import { Router } from "express";
import controller from "../controllers";
import { authValidation, errorValidation } from "../middleware";
const router = Router();

const {
  auth: { signup, signin },
} = controller;

const { signupRules } = authValidation;

// signup
router.post("/signup", signupRules, errorValidation, signup);

// signin
router.post("/signin", signin);

export default router;
