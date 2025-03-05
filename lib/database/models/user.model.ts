import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  events: mongoose.Types.ObjectId[];
  orders: mongoose.Types.ObjectId[]; // Add this
}

const UserSchema = new mongoose.Schema<IUser>({
  clerkId: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  firstName: { type: String, default: "N/A" },
  lastName: { type: String, default: "N/A" },
  photo: { type: String, default: "" },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // Add this
});

export const User = mongoose.model<IUser>("User", UserSchema);
