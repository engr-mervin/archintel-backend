import { HydratedDocument, Model, Types } from "mongoose";

export enum CompanyStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface ICompany {
  createdAt: Date;
  id: Types.ObjectId;
  logo: string;
  name: string;
  status: CompanyStatus;
}

export interface ICompanyMethods {}
export type CompanyType = HydratedDocument<ICompany, ICompanyMethods>;
export type CompanyModel = Model<ICompany, {}, ICompanyMethods>;
