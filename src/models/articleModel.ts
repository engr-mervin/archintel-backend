import mongoose from "@/database/mongoose";
import { ArticleStatus, type ArticleModel, type IArticle, type IArticleMethods } from "@/types/articleTypes.js";

const articleSchema = new mongoose.Schema<IArticle, ArticleModel, IArticleMethods>({
  image: {
    type: String,
    required:true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(ArticleStatus),
    default: ArticleStatus.ForEdit
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
  },
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
