import { HydratedDocument, Model, Types } from "mongoose";

export enum ArticleStatus {
  ForEdit = "For Edit",
  Published = "Published",
}

export interface IArticle {
  createdAt: Date;
  id: Types.ObjectId;
  image: string;
  title: string;
  link: string;
  date: Date;
  content: string;
  status: ArticleStatus;
  writer: Types.ObjectId;
  editor: Types.ObjectId;
  company: Types.ObjectId;
}

export interface IArticleMethods {}
export type ArticleType = HydratedDocument<IArticle, IArticleMethods>;
export type ArticleModel = Model<IArticle, {}, IArticleMethods>;
