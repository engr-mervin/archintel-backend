import { createUser, getUsers, updateUser } from "@/controllers/userController";
import { Router } from "express";

const router = Router();

//"users" routes
router.post("", createUser);
router.get("", getUsers);

//FOR improvement, Create a middleware to fetch
//article for all paths starting in /:articleId
router.patch("/:userId", updateUser);

export default router;
