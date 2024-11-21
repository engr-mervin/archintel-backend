import mongoose from "@/database/mongoose";
import { ArticleStatus, type ArticleModel, type IArticle, type IArticleMethods } from "@/types/articleTypes.js";

const articleSchema = new mongoose.Schema<IArticle, ArticleModel, IArticleMethods>({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
  },
  content: {
    type: String,
  },
  status: {
    type: String,
    enum: Object.values(ArticleStatus),
  },
  writer: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  editor: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
