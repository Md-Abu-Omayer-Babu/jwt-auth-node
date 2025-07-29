import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: [true, "Username is required"],
    //   unique: true,
    //   trim: true,
    //   minlength: [3, "Username must be at least 3 characters long"],
    //   maxlength: [30, "Username cannot exceed 30 characters"],
    //   lowercase: true,
    //   match: [/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"], // ✅ Validation regex
    // },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"], // ✅ Email validation
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // Do not return password in queries by default
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
    profileImage: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
