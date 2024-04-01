import Form from "../models/form.model.js";
// Controlador para crear una nueva prueba
export const createForms = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la prueba" });
  }
};

// Controlador para obtener una prueba por su ID
export const getForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form no encontrada" });
    }
    res.json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el formulario" });
  }
};

// Controlador para actualizar una prueba por su ID
export const updateForm = async (req, res) => {
  try {
    const updateForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateForm) {
      return res.status(404).json({ message: "Forms no encontrada" });
    }
    res.json(updateForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizarel forms" });
  }
};

// Controlador para eliminar una prueba por su ID
export const deleteForm = async (req, res) => {
  try {
    const deleteForm = await Form.findByIdAndDelete(req.params.id);
    if (!deleteForm) {
      return res.status(404).json({ message: "Prueba no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la prueba" });
  }
};


export const getForms = async (req, res) => {
  try {
    const forms = await Form.find({ user : req.user.id }).populate("user");
    res.json(forms);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};