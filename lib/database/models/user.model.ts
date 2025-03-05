import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  firstName: { type: String, default: "N/A" }, // Remove required: true, set default
  lastName: { type: String, default: "N/A" }, // Remove required: true, set default
  photo: { type: String, default: "" },
});

export const User = model("User", UserSchema);
