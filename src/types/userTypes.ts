import { HydratedDocument, Model, Types } from "mongoose";

export enum UserRole {
  Writer = "writer",
  Editor = "editor",
}
export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface IUser {
  createdAt: Date;
  id: Types.ObjectId;
  firstName: string;
  lastName: string;
  type: UserRole;
  status: UserStatus;
}

export interface IUserMethods {}
export type UserType = HydratedDocument<IUser, IUserMethods>;
export type UserModel = Model<IUser, {}, IUserMethods>;
