import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Hello from JWT Auth API!");
    res.send("Hello from JWT Auth API!");
});

export default app;
