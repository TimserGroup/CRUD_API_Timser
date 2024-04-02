import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  idForm: {
    type: Number,
    required: true,
  },
  FolioDevelab: {
    type: String,
    required: true,
  },
  fechaToma: {
    type: Date,
    required: true,
  },
  cliente: {
    type: String,
    required: true,
  },
  tomaRecibida: {
    type: Boolean,
    default: false,
  },
  tomaProcesada: {
    type: Boolean,
    default: false,
  },
  tomaEnviada: {
    type: Boolean,
    default: false,
  },
  tomaEntregada: {
    type: Boolean,
    default: false,
  },
  fecha_lavadowb: {
    type: Date,
    default: null,
  },
  realizoLavadowb: String,
  fecha_precipitadowb: {
    type: Date,
    default: null,
  },
  realizoPrecipitadowb: String,
  fechaProceso: {
    type: Date,
    default: null,
  },
  placaProceso: String,
  resultado4PL: String,
  observacionesWB: String,
  observacionesE: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: "Patient",
  },
}, 
{ timestamps: true });

export default mongoose.model("Test", testSchema);
