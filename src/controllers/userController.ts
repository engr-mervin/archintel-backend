import { APIError } from "@/classes/APIError";
import { catchError } from "@/utils/catchError";
import { NextFunction, Request, Response } from "express";
import User from "@/models/userModel";
import { UserStatus } from "@/types/userTypes";

export const createUser = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  //For improvement, fetch user by JWT
  //Then Validate if user is publisher
  const userForCreation = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    status: UserStatus.Active,
  });

  res.status(200).json({
    status: "success",
    result: userForCreation, //including id
  });
});

export const getUsers = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const allUsers = await User.find({});

  res.status(200).json({
    status: "success",
    result: allUsers, //including id
  });
});

export const updateUser = catchError(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userForUpdate = await User.findById(req.params.userId);

  if (!userForUpdate) {
    throw new APIError(404, `User not found.`);
  }

  userForUpdate.firstName = req.body.firstName;
  userForUpdate.lastName = req.body.lastName;
  userForUpdate.type = req.body.type;

  await userForUpdate.save();

  res.status(200).json({
    status: "success",
    result: userForUpdate,
  });
});
