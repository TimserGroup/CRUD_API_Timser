import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { usePatients } from "../context/patientContext"; // Importa el contexto adecuado
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function PatientFormPage() {
  const { createPatient, getPatient, updatePatient } = usePatients(); // Usa el contexto correcto
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updatePatient(params.id, {
          ...data,
          // Ajusta otros campos según el esquema de paciente
        });
      } else {
        createPatient({
          ...data,
          // Ajusta otros campos según el esquema de paciente
        });
      }

      // navigate("/patients"); // Ajusta la redirección según tu ruta
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadPatient = async () => {
      if (params.id) {
        const patient = await getPatient(params.id);
        // Ajusta la carga de campos según el esquema de paciente
      }
    };
    loadPatient();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Ajusta los campos según el esquema de paciente */}
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
          autoFocus
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">Please enter a name.</p>
        )}

        <Label htmlFor="age">Age</Label>
        <Input
          type="number"
          name="age"
          placeholder="Age"
          {...register("age")}
        />
        {errors.age && (
          <p className="text-red-500 text-xs italic">Please enter an age.</p>
          )}
          <Label htmlFor="gender">Gender</Label>
    <select name="gender" {...register("gender")}>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    {errors.gender && (
      <p className="text-red-500 text-xs italic">Please select a gender.</p>
    )}

    <Label htmlFor="description">Description</Label>
    <Textarea
      name="description"
      id="description"
      rows="3"
      placeholder="Description"
      {...register("description")}
    ></Textarea>

    {/* Otros campos del esquema de paciente */}
    
    <Button>Save</Button>
  </form>
</Card>
);
}
