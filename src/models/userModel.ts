import mongoose from "@/database/mongoose";
import { UserRole, UserStatus, type IUser, type IUserMethods, type UserModel } from "@/types/userTypes.js";

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  type: {
    type: String,
    enum: Object.values(UserRole),
  },
  status: {
    type: String,
    enum: Object.values(UserStatus),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
