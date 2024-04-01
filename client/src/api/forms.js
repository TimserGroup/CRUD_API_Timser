import axios from "./axios";

export const getFormsRequest = async () => axios.get("/forms");

export const createFormRequest = async (form) => axios.post("/forms", form);

export const updateFormRequest = async (form) =>
  axios.put(`/forms/${form._id}`, form);

export const deleteFormRequest = async (id) => axios.delete(`/forms/${id}`);

export const getFormRequest = async (id) => axios.get(`/forms/${id}`);
