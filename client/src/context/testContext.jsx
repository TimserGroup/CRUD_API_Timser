import { createContext, useContext, useState } from "react";
import {
  createTestRequest,
  deleteTestRequest,
  getTestsRequest,
  getTestRequest,
  updateTestRequest,
} from "../api/tests";

const TestContext = createContext();

export const useTests = () => {
  const context = useContext(TestContext);
  if (!context) throw new Error("useTests must be used within a TestProvider");
  return context;
};

export function TestProvider({ children }) {
  const [tests, setTests] = useState([]);

  

  const getTests = async () => {
    try {
      const res = await getTestsRequest();
      setTests(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTest = async (id) => {
    try {
      const res = await deleteTestRequest(id);
      if (res.status === 204) setTests(tests.filter((test) => test._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTest = async (test) => {
    try {
      const res = await createTestRequest(test);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTest = async (id) => {
    try {
      const res = await getTestRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTest = async (id, test) => {
    try {
      const res = await updateTestRequest(id, test);
      const updatedTestIndex = tests.findIndex((t) => t._id === id);
      if (updatedTestIndex !== -1) {
        const updatedTests = [...tests];
        updatedTests[updatedTestIndex] = res.data;
        setTests(updatedTests);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TestContext.Provider
      value={{
        tests,
        getTests,
        deleteTest,
        createTest,
        getTest,
        updateTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}
