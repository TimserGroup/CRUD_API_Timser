import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  patientID: String,
  Lugar_Toma: String,
  ayuno: String,
  ultimoAlimento: Date,
  tipoAlimento: String,
  codigoPostal: String,
  zonaDemografica: String,
  estudios: String,
  lugarTomaMuestra: String,
  fechaAplicacion: {
    type: Date,
    default: Date.now
  },
  correo: String,
  correo2: String,
  celular: String,
  peso: Number,
  talla: Number,
  IMC: Number,
  InterpretacionIMC: String,
  vacunaVPH: String,
  condicionesLab: String,
  fumador: String,
  consumiasSemanal: String,
  consumesSemanal: String,
  pruebaPap: String,
  fecPap: Number,
  fecUPap: Number,
  resPap: String,
  resPap2: String,
  peridiodicidadPap: String,
  nuncaPap: String,
  pruebaColp: String,
  fecColp: Number,
  fecUColp: Number,
  resColp: String,
  resColp2: String,
  razonHister: String,
  menstruacion: Number,
  relaciones: String,
  edadRelaciones: Number,
  parejasSexuales: Number,
  anticonceptivos: String,
  anticonceptivosOrales: String,
  embarazo: String,
  partos: Number,
  cesareas: Number,
  abortos: String,
  numAbortos: Number,
  comoAborto: String
});

const Form = mongoose.model("Form", FormSchema);

export default Form;
