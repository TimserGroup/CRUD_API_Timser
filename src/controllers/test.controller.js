import Test from "../models/test.model.js";

// Controlador para crear una nueva prueba
export const createTest = async (req, res) => {
  try {
    const newTest = new Test(req.body);
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la prueba" });
  }
};

// Controlador para obtener una prueba por su ID
export const getTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Prueba no encontrada" });
    }
    res.json(test);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la prueba" });
  }
};

// Controlador para actualizar una prueba por su ID
export const updateTest = async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTest) {
      return res.status(404).json({ message: "Prueba no encontrada" });
    }
    res.json(updatedTest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la prueba" });
  }
};

// Controlador para eliminar una prueba por su ID
export const deleteTest = async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);
    if (!deletedTest) {
      return res.status(404).json({ message: "Prueba no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la prueba" });
  }
};

export const getTestsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId; // Obtener el id del usuario de los parámetros de la solicitud
    const tests = await Test.find({ user: userId }); // Buscar todos los tests del usuario con el id proporcionado
    res.json(tests); // Devolver los tests encontrados
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los tests del usuario" });
  }
};
export const getTests = async (req, res) => {
  try {
    const tests = await Test.find({ user : req.user.id }).populate("user");
    res.json(tests);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};