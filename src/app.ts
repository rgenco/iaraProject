import express, { NextFunction, Request, Response } from "express";

import cors from "cors";

const app = express();

import authorRouter from "./routes/author.router";

// Rate limiting

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders:
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  }),
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
//ROUTER author
app.use("/authors", authorRouter);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// 404
// Routes
app.get("/", (req, res) => {
  res.send("Secure Express Server");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
