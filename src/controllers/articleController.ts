import { APIError } from "@/classes/APIError";
import Article from "@/models/articleModel";
import { catchError } from "@/utils/catchError";
import { NextFunction, Request, Response } from "express";
import { ArticleStatus } from "@/types/articleTypes";

export const createArticle = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  //For improvement, user should be fetched using JWT
  //And the writer field should be the name of the fetched User
  const articleForCreation = await Article.create({
    image: req.body.image,
    title: req.body.title,
    link: req.body.link,
    date: new Date(req.body.date),
    content: req.body.content,
    writer: req.body.writer,
  });

  res.status(200).json({
    status: "success",
    result: articleForCreation, //including id
  });
});

export const getArticles = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  //For improvement, user should be fetched using JWT
  //And the writer field should be the name of the fetched User
  const articles = await Article.find({});

  res.status(200).json({
    status: "success",
    result: articles, 
  });
});



export const updateArticle = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  
  const articleForUpdate = await Article.findById(req.params.articleId);
  
  if(!articleForUpdate){
    throw new APIError(404, `Article not found.`);
  }

  articleForUpdate.image = req.body.image;
  articleForUpdate.title = req.body.title;
  articleForUpdate.link = req.body.link;
  articleForUpdate.date = new Date(req.body.date);
  articleForUpdate.content = req.body.content;

  await articleForUpdate.save();

  res.status(200).json({
    status: "success",
    result: articleForUpdate,
  });
});

export const publishArticle =  catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  
  const articleForPublish = await Article.findById(req.body.id);
  
  if(!articleForPublish){
    throw new APIError(404, `Article not found.`);
  }

  articleForPublish.image = req.body.image;
  articleForPublish.title = req.body.title;
  articleForPublish.link = req.body.link;
  articleForPublish.date = new Date(req.body.date);
  articleForPublish.content = req.body.content;
  articleForPublish.status = ArticleStatus.Published;

  await articleForPublish.save();

  res.status(200).json({
    status: "success",
    result: articleForPublish,
  });
});
