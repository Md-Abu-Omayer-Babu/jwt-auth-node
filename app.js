import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import userProfileRoutes from "./routes/userProfile.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userProfileRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
    console.log("Hello from JWT Auth API!");
    res.send("Hello from JWT Auth API!");
});

export default app;
