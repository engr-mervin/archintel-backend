import mongoose from "@/database/mongoose";
import { CompanyStatus, type CompanyModel, type ICompany, type ICompanyMethods } from "@/types/companyTypes.js";

const companySchema = new mongoose.Schema<ICompany, CompanyModel, ICompanyMethods>({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(CompanyStatus),
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Company = mongoose.model("Company", companySchema);
export default Company;
