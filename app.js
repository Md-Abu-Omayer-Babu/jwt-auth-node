import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Hello from JWT Auth API!");
    res.send("Hello from JWT Auth API!");
});

export default app;
