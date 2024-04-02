import React from 'react';
import { Button, Card } from "../ui"; 
import { useForms } from '../../context/formsContext';

export function FormCard({ form }) {
    const { deleteForm } = useForms();

    // Aquí puedes formatear y mostrar la información del formulario
    // según el esquema proporcionado

    return (
        <Card>
            <header className="flex justify-between">
                <h1 className="className">Prueba</h1>
                <h1 className="text-2xl font-bold">{form.cliente}</h1>
                <h1 className="text-2xl font-bold">{form.tipoAlimento}</h1>
                <h1 className="text-2xl font-bold">{form.codigoPostal}</h1>
                <div className="flex gap-x-2 items-center">
                <Button onClick={() => deleteForm(form._id)}>Delete</Button>
          <ButtonLink to={`/forms/${form._id}`}>Edit</ButtonLink>
                </div>
            </header>
            {/* Aquí puedes mostrar más detalles del formulario */}
        </Card>
    );
}
