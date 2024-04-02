// patient.page.jsx
import { useEffect } from "react";
import { usePatients } from "../context/patientContext";
import { PatientCard } from "../components/tasks/PatientCard";
import { ImFileEmpty } from "react-icons/im";

export function PatientsPage() {
  const { patients, getPatients } = usePatients();

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <>
      {patients.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No patients yet, please add a new patient
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {patients.map((patient) => (
          <PatientCard patient={patient} key={patient._id} />
        ))}
      </div>
    </>
  );
}
