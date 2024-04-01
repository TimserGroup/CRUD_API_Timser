import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTests } from "../context/testContext"; // Importa el contexto adecuado
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TestFormPage() {
  const { createTest, getTest, updateTest } = useTests(); // Usa el contexto correcto
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
        updateTest(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTest({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tests"); // Ajusta la redirección según tu ruta
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTest = async () => {
      if (params.id) {
        const test = await getTest(params.id);
        setValue("name", test.name);
        setValue("description", test.description);
        setValue(
          "date",
          test.date ? dayjs(test.date).utc().format("YYYY-MM-DD") : ""
        );
        // Ajusta la carga de otros campos según el esquema de test
      }
    };
    loadTest();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Description"
          {...register("description")}
        ></Textarea>

        <Label htmlFor="date">Date</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button>Save</Button>
      </form>
    </Card>
  );
}
