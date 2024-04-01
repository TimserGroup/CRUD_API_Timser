import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { PatientFormPage } from "./pages/PatientFormPage";
import { TestFormPage } from "./pages/TestFormPage";
import { FormFormPage } from "./pages/FormFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { PatientsPage } from "./pages/PatientPage"; // Importar página de pacientes
import { TestPage } from "./pages/TestPage"; // Importar página de pruebas
import { FormsPage } from "./pages/FormsPage"; // Importar página de formularios
import { TaskProvider } from "./context/tasksContext";
import { PatientProvider } from "./context/patientContext"; // Importar el proveedor de pacientes
import { TestProvider } from "./context/testContext"; // Importar el proveedor de pruebas
import { FormProvider } from "./context/formsContext"; // Importar el proveedor de formularios

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <PatientProvider>
          <TestProvider>
            <FormProvider> {/* Agregar el proveedor de formularios */}
              <BrowserRouter>
                <main className="container content-container mx-auto px-10 md:px-0">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/tasks" element={<TasksPage />} />
                      <Route path="/add-task" element={<TaskFormPage />} />
                      <Route path="/tasks/:id" element={<TaskFormPage />} />
                      <Route path="/patients" element={<PatientsPage />} />
                      <Route path="/add-patient" element={<PatientFormPage />} />
                      <Route path="/tests" element={<TestPage />} />
                      <Route path="/add-test" element={<TestFormPage />} />
                      <Route path="/forms" element={<FormsPage />} /> {/* Agregar la ruta para la página de formularios */}
                      <Route path="/add-form" element={<FormFormPage />} />
                      <Route path="/profile" element={<h1>Profile</h1>} />
                    </Route>
                  </Routes>
                </main>
              </BrowserRouter>
            </FormProvider>
          </TestProvider>
        </PatientProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
