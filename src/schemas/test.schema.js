import { z } from "zod";

export const createTestSchema = z.object({
  idForm: z.string(),
  FolioDevelab: z.string(),
  fechaToma: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  cliente: z.string(),
  tomaRecibida: z.boolean(),
  tomaProcesada: z.boolean(),
  tomaEnviada: z.boolean(),
  tomaEntregada: z.boolean(),
  fecha_lavadowb: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  realizoLavadowb: z.string(),
  fecha_precipitadowb: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  realizoPrecipitadowb: z.string(),
  fechaProceso: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  placaProceso: z.string(),
  resultado4PL: z.string(),
  interpretacionPreventix: z.string(),
  observacionesWB: z.string(),
  observacionesE: z.string(),
});
