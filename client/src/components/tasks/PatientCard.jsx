import { usePatients } from "../../context/patientContext";
import React from 'react';
import { Button, ButtonLink, Card } from "../ui"; // Importa los componentes de UI necesarios


export function PatientCard ({ patient }) {
  const { deletePatient } = usePatients();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{patient.name}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deletePatient(patient._id)}>Delete</Button>
          <ButtonLink to={`/patients/${patient._id}`}>Edit</ButtonLink> {/* Enlace para editar paciente */}
        </div>
      </header>
      <p className="text-gray-600 mb-1"><strong>Age:</strong> {patient.nombre}</p>
      <p className="text-gray-600 mb-1"><strong>Date:</strong> {patient.fecha_nacimiento}</p>
      <p className="text-gray-600 mb-1"><strong>Email:</strong> {patient.correo}</p>
      <p className="text-gray-600 mb-1"><strong>Phone:</strong> {patient.telefono}</p>
      {/* Agrega más detalles del paciente aquí */}
    </Card>
  );
};


