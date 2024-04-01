import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { createTest, getTest, getTests, updateTest, deleteTest } from "../controllers/test.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTestSchema } from "../schemas/test.schema.js";

const router = Router();

router.get("/tests", auth, getTests);

router.post("/tests", auth, validateSchema(createTestSchema), createTest);

router.get("/tests/:id", auth, getTest);

router.put("/tests/:id", auth, updateTest);

router.delete("/tests/:id", auth, deleteTest);

export default router;
