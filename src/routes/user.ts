import { Router } from "express";
import controller from "../controllers";

const router = Router();

const {
  user: { getUser, getUsers },
} = controller;

// Get all users
router.get("/users", getUsers);

// Get single user
router.get("/user/:userId", getUser);

export default router;
