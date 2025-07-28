import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password, profileImage } = req.body;

    // const { username } = req.body;        // username is commented out
    // const existingUser = await User.findOne({ username });
    // if (existingUser) {
    //   return res.status(400).json({ message: "Username already exists" });
    // }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      //   username,
      fullName,
      email,
      password: hashedPassword,
      profileImage,
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        // username: user.username,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        profileImage: user.profileImage,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Update last login timestamp
    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        // username: user.username,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        profileImage: user.profileImage,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    next(error);
  }
};

// export default { registerUser, loginUser };
