import { Router } from "express";
import {
  createPatient,
  deletePatient,
  getPatient,
  getPatients,
  updatePatient,
} from "../controllers/patient.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPatientSchema } from "../schemas/patient.schema.js";

const router = Router();

router.get("/patients", auth, getPatients);

router.post("/patients", auth, validateSchema(createPatientSchema), createPatient);

router.get("/patients/:id", auth, getPatient);

router.put("/patients/:id", auth, updatePatient);

router.delete("/patients/:id", auth, deletePatient);

export default router;
