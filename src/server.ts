import app from "./app";
import { config } from "dotenv";
import http from "http";
import { consola } from "consola";

config();

const PORT: number = parseInt(process.env.PORT || "3000", 10);
const NODE_ENV: string = process.env.NODE_ENV || "development";

const server = new http.Server(app);

// Handle uncaught exceptions and unhandled rejections
process.on("uncaughtException", (error: Error) => {
  consola.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    consola.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1);
  },
);

// Graceful shutdown
const shutdown = () => {
  consola.info("Shutting down server...");
  server.close(() => {
    console.info("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// Start server
server.listen(PORT, () => {
  consola.box(`
    Server running in ${NODE_ENV} mode
    Listening on port ${PORT}
    Ready to handle requests
  `);
});
