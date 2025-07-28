import http from "http";
import app from "./app.js";
import config from "./config/index.js";
import connectDB from "./db/dbConnect.js";

const PORT = config.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    http.createServer(app).listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();