// patientsContext.jsx
import { createContext, useContext, useState } from "react";
import {
  createPatientRequest,
  deletePatientRequest,
  getPatientsRequest,
  getPatientRequest,
  updatePatientRequest,
} from "../api/patients";

const PatientContext = createContext();

export const usePatients = () => {
  const context = useContext(PatientContext);
  if (!context) throw new Error("usePatients must be used within a PatientProvider");
  return context;
};

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState([]);

  const getPatients = async () => {
    const res = await getPatientsRequest();
    setPatients(res.data);
  };

  const deletePatient = async (id) => {
    try {
      const res = await deletePatientRequest(id);
      if (res.status === 204) setPatients(patients.filter((patient) => patient._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createPatient = async (patient) => {
    try {
      const res = await createPatientRequest(patient);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPatient = async (id) => {
    try {
      const res = await getPatientRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePatient = async (id, patient) => {
    try {
      await updatePatientRequest(id, patient);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        getPatients,
        deletePatient,
        createPatient,
        getPatient,
        updatePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}
