import { createContext, useContext, useState } from "react";
import {
  createFormRequest,
  deleteFormRequest,
  getFormsRequest,
  getFormRequest,
  updateFormRequest,
} from "../api/forms";

const FormContext = createContext();

export const useForms = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function FormProvider({ children }) {
  const [forms, setForms] = useState([]);

  const getForms = async () => {
    const res = await getFormsRequest();
    setForms(res.data);
  };

  const deleteForm = async (id) => {
    try {
      const res = await deleteFormRequest(id);
      if (res.status === 204) setForms(tasks.filter((forms) => form._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createForm = async (form) => {
    try {
      const res = await createFormRequest(form);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getForm = async (id) => {
    try {
      const res = await getFormRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateForm = async (id, form) => {
    try {
      await updateFormRequest(id, form);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        forms,
        getForms,
        deleteForm,
        createForm,
        getForm,
        updateForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
