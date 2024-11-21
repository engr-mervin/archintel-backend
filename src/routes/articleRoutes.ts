import {
  createArticle,
  getArticles,
  publishArticle,
  updateArticle,
} from "@/controllers/articleController";
import { Router } from "express";

const router = Router();

//"articles" routes
router.post("", createArticle);
router.get("", getArticles);

//FOR improvement, Create a middleware to fetch
//article for all paths starting in /:articleId
router.patch("/:articleId", updateArticle);
router.post("/:articleId/publish", publishArticle);

export default router;
