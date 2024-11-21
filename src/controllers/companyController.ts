import { APIError } from "@/classes/APIError";
import { catchError } from "@/utils/catchError";
import { NextFunction, Request, Response } from "express";
import Company from "@/models/companyModel";
import { CompanyStatus } from "@/types/companyTypes";

export const createCompany = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  //For improvement, fetch user by JWT
  //Then Validate if user is publisher
  const companyForCreation = await Company.create({
    logo: req.body.logo,
    name: req.body.name,
    status: CompanyStatus.Active,
  });

  res.status(200).json({
    status: "success",
    result: companyForCreation, //including id
  });
});

export const getCompanies = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const allCompanies = await Company.find({});

  res.status(200).json({
    status: "success",
    result: allCompanies, //including id
  });
});

export const updateCompany = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const companyForUpdate = await Company.findById(req.params.companyId);

  if (!companyForUpdate) {
    throw new APIError(404, `User not found.`);
  }

  companyForUpdate.logo = req.body.logo;
  companyForUpdate.name = req.body.name;

  await companyForUpdate.save();

  res.status(200).json({
    status: "success",
    result: companyForUpdate,
  });
});
