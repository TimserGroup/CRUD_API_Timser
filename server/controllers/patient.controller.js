import Patient from "../models/patient.model.js";

export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ user : req.user.id }).populate("user");
    res.json(patients);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPatient = async (req, res) => {
  try {
    const { nombre, edad, fecha_nacimiento, correo, telefono } = req.body;
    const newPatient = new Patient({
      nombre,
      edad,
      fecha_nacimiento,
      correo,
      telefono,
      user: req.user.id,
    });
    await newPatient.save();
    res.json(newPatient);
    console.log("usuario prueba console log");
    
  } catch (error) {
    
    return res.status(500).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient)
      return res.status(404).json({ message: "Patient not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const { nombre, edad, fecha_nacimiento, correo, telefono } = req.body;
    const patientUpdated = await Patient.findOneAndUpdate(
      { _id: req.params.id },
      { nombre, edad, fecha_nacimiento, correo, telefono },
      { new: true }
    );
    return res.json(patientUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    return res.json(patient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
