import http from "http";
import app from "./app.js";
import { config } from "./config/index.js";

const PORT = config.port;

const startServer = async () => {
  try {
    http.createServer(app).listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();