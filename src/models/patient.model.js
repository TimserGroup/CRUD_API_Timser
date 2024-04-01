import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },
    fecha_nacimiento: {
      type: Date,
      required: true,
    },
    correo: {
      type: String,
      required: false,
    },
    telefono: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    // Agregar otras propiedades según sea necesario
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Patient", patientSchema);
