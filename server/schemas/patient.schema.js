import { z } from "zod";

export const createPatientSchema = z.object({
  nombre: z.string({
    required_error: "Nombre es requerido",
  }),
  edad: z.number().int().positive(),
  fecha_nacimiento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  correo: z.string().email().optional(),
  telefono: z.string().optional(),
  // Agregar otras propiedades según sea necesario
});
