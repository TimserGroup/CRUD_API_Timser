import express from "express";
import cors from 'cors';
import morgan from "morgan";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import taksRoutes from "./routes/task.routes.js";
import patientRoutes from './routes/patient.routes.js';
import testRoutes from './routes/test.routes.js';
import formRoutes from './routes/form.routes.js';


import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true, // Permitir credenciales (por ejemplo, cookies)
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", patientRoutes);
app.use("/api", taksRoutes);
app.use("/api", testRoutes);
app.use("/api", formRoutes);

export default app;