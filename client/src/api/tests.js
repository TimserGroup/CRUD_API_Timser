import axios from "./axios";

export const getTestsRequest = async () => axios.get("/tests");

export const createTestRequest = async (test) => axios.post("/tests", test);

export const updateTestRequest = async (test) =>
  axios.put(`/tests/${test._id}`, test);

export const deleteTestRequest = async (id) => axios.delete(`/tests/${id}`);

export const getTestRequest = async (id) => axios.get(`/tests/${id}`);




