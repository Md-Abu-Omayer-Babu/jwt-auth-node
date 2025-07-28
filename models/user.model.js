import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   minlength: 3,
    //   maxlength: 30,
    //   lowercase: true,
    // },
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
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

export default User = mongoose.model("User", userSchema);
