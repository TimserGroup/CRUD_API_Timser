import React from 'react';
import { Button, Card } from "../ui"; 
import { useTests } from '../../context/testContext';

export function TestCard({ test }) {
    const { deleteTest } = useTests();

    const formattedDate = new Date(test.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Card>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{test.name}</h1>
                <div className="flex gap-x-2 items-center">
                    <Button onClick={() => deleteTest(test._id)}>Delete</Button>
                </div>
            </header>
            <p className="text-gray-600 mb-1"><strong>Description:</strong> {test.description}</p>
            <p className="text-gray-600 mb-1"><strong>Date:</strong> {formattedDate}</p>
            {/* Agrega más detalles del test aquí */}
        </Card>
    );
}
