import axios from "./axios";

export const getPatientsRequest = async () => axios.get("/patients");

export const createPatientRequest = async (patient) => axios.post("/patients", patient);

export const updatePatientRequest = async (patient) =>
  axios.put(`/patients/${patient._id}`, patient);

export const deletePatientRequest = async (id) => axios.delete(`/patients/${id}`);

export const getPatientRequest = async (id) => axios.get(`/patients/${id}`);
