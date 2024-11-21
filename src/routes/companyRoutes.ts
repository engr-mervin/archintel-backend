import { createCompany, getCompanies, updateCompany } from "@/controllers/companyController";
import { createUser, getUsers, updateUser } from "@/controllers/userController";
import { Router } from "express";

const router = Router();

//"users" routes
router.post("", createCompany);
router.get("", getCompanies);

//FOR improvement, Create a middleware to fetch
//article for all paths starting in /:articleId
router.patch("/:companyId", updateCompany);

export default router;
