import { useEffect } from "react";
import { useForms } from "../context/formsContext";
import { FormCard } from "../components/tasks/FormCard";
import { ImFileEmpty } from "react-icons/im";

export function FormsPage() {
  const { forms, getForms } = useForms();

  useEffect(() => {
    getForms();
  }, []);

  return (
    <>
      {forms.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No forms yet, please add a new form
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {forms.map((form) => (
          <FormCard form={form} key={form._id} />
        ))}
      </div>
    </>
  );
}
