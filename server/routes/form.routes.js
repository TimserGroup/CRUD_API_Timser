import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  createForms,
  getForms,
  getForm,
  updateForm,
  deleteForm
} from "../controllers/form.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createFormSchema } from "../schemas/form.schema.js";

const router = Router();

router.get("/forms", auth, getForms);

router.post("/forms", auth, validateSchema(createFormSchema), createForms);

router.get("/forms/:id", auth, getForm);

router.put("/forms/:id", auth, updateForm);

router.delete("/forms/:id", auth, deleteForm);



export default router;
