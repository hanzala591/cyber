import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
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
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});
export default mongoose.models.User || mongoose.model("User", userSchema);
