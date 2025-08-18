import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "Username  requied"] },
    email: { type: String, required: [true, "Email required"], unique: true },
    password: {
      type: String,
      required: true,
      minlength: [4, "Password minimum 4 Digits"],
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
