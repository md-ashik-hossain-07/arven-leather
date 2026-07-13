import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ARVEN Backend is running.",
  });
});

export default app;