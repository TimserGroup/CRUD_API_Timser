import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label ,Textarea} from "../components/ui";
import { useForm } from "react-hook-form";
import { createFormRequest } from "../api/forms";


export function FormFormPage() {
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
            await updateTask(params.id, {
              ...data,
              date: dayjs.utc(data.date).format(),
            });
          } else {
            await createFormRequest({
              ...data,
              date: dayjs.utc(data.date).format(),
            });
          }
      
          navigate("/tasks");
        } catch (error) {
          console.log(error);
          // Manejo de errores, como redireccionamiento o mensajes al usuario
        }
      };
  
      useEffect(() => {
        const loadTask = async () => {
          if (params.id) {
            const task = await getTask(params.id);
            setValue("title", task.title);
            setValue("description", task.description);
            setValue("date", task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : "");
            setValue("completed", task.completed);
            setValue("lugarToma", task.lugarToma);
            setValue("ayuno", task.ayuno);
            setValue("ultimoAlimento", task.ultimoAlimento);
            setValue("tipoAlimento", task.tipoAlimento);
            setValue("codigoPostal", task.codigoPostal);
            setValue("zonaDemografica", task.zonaDemografica);
            setValue("estudios", task.estudios);
            setValue("lugarTomaMuestra", task.lugarTomaMuestra);
            setValue("fechaAplicacion", task.fechaAplicacion);
            setValue("correo", task.correo);
            setValue("correo2", task.correo2);
            setValue("celular", task.celular);
            setValue("peso", task.peso);
            setValue("talla", task.talla);
            setValue("IMC", task.IMC);
            setValue("InterpretacionIMC", task.InterpretacionIMC);
            setValue("vacunaVPH", task.vacunaVPH);
            setValue("condicionesLab", task.condicionesLab);
            setValue("fumador", task.fumador);
            setValue("consumiasSemanal", task.consumiasSemanal);
            setValue("consumesSemanal", task.consumesSemanal);
            setValue("pruebaPap", task.pruebaPap);
            setValue("fecPap", task.fecPap);
            setValue("fecUPap", task.fecUPap);
            setValue("resPap", task.resPap);
            setValue("resPap2", task.resPap2);
            setValue("peridiodicidadPap", task.peridiodicidadPap);
            setValue("nuncaPap", task.nuncaPap);
            setValue("pruebaColp", task.pruebaColp);
            setValue("fecColp", task.fecColp);
            setValue("fecUColp", task.fecUColp);
            setValue("resColp", task.resColp);
            setValue("resColp2", task.resColp2);
            setValue("razonHister", task.razonHister);
            setValue("menstruacion", task.menstruacion);
            setValue("relaciones", task.relaciones);
            setValue("edadRelaciones", task.edadRelaciones);
            setValue("parejasSexuales", task.parejasSexuales);
            setValue("anticonceptivos", task.anticonceptivos);
            setValue("anticonceptivosOrales", task.anticonceptivosOrales);
            setValue("embarazo", task.embarazo);
            setValue("partos", task.partos);
            setValue("cesareas", task.cesareas);
            setValue("abortos", task.abortos);
            setValue("numAbortos", task.numAbortos);
            setValue("comoAborto", task.comoAborto);
            // Asignar otros valores de acuerdo al esquema de la tarea
          }
        };
        loadTask();
      }, []);
  
    return (
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}
  
          {/* Description */}
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Description"
            {...register("description")}
          ></Textarea>
  
          {/* Date */}
          <Label htmlFor="date">Date</Label>
          <Input type="date" name="date" {...register("date")} />
  
          {/* Lugar_Toma */}
          <Label htmlFor="lugarToma">Lugar Toma</Label>
          <Input
            type="text"
            name="lugarToma"
            placeholder="Lugar Toma"
            {...register("lugarToma")}
          />
  
          {/* Ayuno */}
          <Label htmlFor="ayuno">Ayuno</Label>
          <Input
            type="text"
            name="ayuno"
            placeholder="Ayuno"
            {...register("ayuno")}
          />
  
          {/* ultimoAlimento */}
          <Label htmlFor="ultimoAlimento">Último Alimento</Label>
          <Input
            type="text"
            name="ultimoAlimento"
            placeholder="Último Alimento"
            {...register("ultimoAlimento")}
          />
  
          {/* tipoAlimento */}
          <Label htmlFor="tipoAlimento">Tipo de Alimento</Label>
          <Input
            type="text"
            name="tipoAlimento"
            placeholder="Tipo de Alimento"
            {...register("tipoAlimento")}
          />
  
          {/* codigoPostal */}
          <Label htmlFor="codigoPostal">Código Postal</Label>
          <Input
            type="text"
            name="codigoPostal"
            placeholder="Código Postal"
            {...register("codigoPostal")}
          />
  
          {/* zonaDemografica */}
          <Label htmlFor="zonaDemografica">Zona Demográfica</Label>
          <Input
            type="text"
            name="zonaDemografica"
            placeholder="Zona Demográfica"
            {...register("zonaDemografica")}
          />
  
          {/* estudios */}
          <Label htmlFor="estudios">Estudios</Label>
          <Input
            type="text"
            name="estudios"
            placeholder="Estudios"
            {...register("estudios")}
          />
  
          {/* lugarTomaMuestra */}
          <Label htmlFor="lugarTomaMuestra">Lugar Toma Muestra</Label>
          <Input
            type="text"
            name="lugarTomaMuestra"
            placeholder="Lugar Toma Muestra"
            {...register("lugarTomaMuestra")}
          />
  
          {/* fechaAplicacion */}
          <Label htmlFor="fechaAplicacion">Fecha Aplicación</Label>
          <Input
            type="text"
            name="fechaAplicacion"
            placeholder="Fecha Aplicación"
            {...register("fechaAplicacion")}
          />
  
          {/* correo */}
          <Label htmlFor="correo">Correo</Label>
          <Input
            type="text"
            name="correo"
            placeholder="Correo"
            {...register("correo")}
          />
  
          {/* correo2 */}
          <Label htmlFor="correo2">Correo 2</Label>
          <Input
            type="text"
            name="correo2"
            placeholder="Correo 2"
            {...register("correo2")}
          />
  
          {/* celular */}
          <Label htmlFor="celular">Celular</Label>
          <Input
            type="text"
            name="celular"
            placeholder="Celular"
            {...register("celular")}
          />
  
          {/* peso */}
          <Label htmlFor="peso">Peso</Label>
          <Input
            type="number"
            name="peso"
            placeholder="Peso"
            {...register("peso")}
          />
  
          {/* talla */}
          <Label htmlFor="talla">Talla</Label>
          <Input
            type="number"
            name="talla"
            placeholder="Talla"
            {...register("talla")}
          />
  
          {/* IMC */}
          <Label htmlFor="IMC">IMC</Label>
          <Input
            type="number"
            name="IMC"
            placeholder="IMC"
            {...register("IMC")}
          />
  
          {/* InterpretacionIMC */}
          <Label htmlFor="InterpretacionIMC">Interpretación IMC</Label>
          <Input
            type="text"
            name="InterpretacionIMC"
            placeholder="Interpretación IMC"
            {...register("InterpretacionIMC")}
          />
  
          {/* vacunaVPH */}
          <Label htmlFor="vacunaVPH">Vacuna VPH</Label>
          <Input
            type="text"
            name="vacunaVPH"
            placeholder="Vacuna VPH"
            {...register("vacunaVPH")}
          />
  
          {/* condicionesLab */}
          <Label htmlFor="condicionesLab">Condiciones Lab</Label>
          <Input
            type="text"
            name="condicionesLab"
            placeholder="Condiciones Lab"
            {...register("condicionesLab")}
          />
  
          {/* fumador */}
          <Label htmlFor="fumador">Fumador</Label>
          <Input
            type="text"
            name="fumador"
            placeholder="Fumador"
            {...register("fumador")}
          />
  
          {/* consumiasSemanal */}
          <Label htmlFor="consumiasSemanal">Consumías Semanal</Label>
          <Input
            type="text"
            name="consumiasSemanal"
            placeholder="Consumías Semanal"
            {...register("consumiasSemanal")}
          />
  
          {/* consumesSemanal */}
          <Label htmlFor="consumesSemanal">Consumes Semanal</Label>
          <Input
            type="text"
            name="consumesSemanal"
            placeholder="Consumes Semanal"
            {...register("consumesSemanal")}
          />
  
          {/* pruebaPap */}
          <Label htmlFor="pruebaPap">Prueba Pap</Label>
          <Input
            type="text"
            name="pruebaPap"
            placeholder="Prueba Pap"
            {...register("pruebaPap")}
          />
  
          {/* fecPap */}
          <Label htmlFor="fecPap">Fec Pap</Label>
          <Input
            type="number"
            name="fecPap"
            placeholder="Fec Pap"
            {...register("fecPap")}
            />
                {/* fecUPap */}
      <Label htmlFor="fecUPap">Fec UPap</Label>
      <Input
        type="number"
        name="fecUPap"
        placeholder="Fec UPap"
        {...register("fecUPap")}
      />
  
      {/* resPap */}
      <Label htmlFor="resPap">Res Pap</Label>
      <Input
        type="text"
        name="resPap"
        placeholder="Res Pap"
        {...register("resPap")}
      />
  
      {/* resPap2 */}
      <Label htmlFor="resPap2">Res Pap2</Label>
      <Input
        type="text"
        name="resPap2"
        placeholder="Res Pap2"
        {...register("resPap2")}
      />
  
      {/* peridiodicidadPap */}
      <Label htmlFor="peridiodicidadPap">Peridiodicidad Pap</Label>
      <Input
        type="text"
        name="peridiodicidadPap"
        placeholder="Peridiodicidad Pap"
        {...register("peridiodicidadPap")}
      />
  
      {/* nuncaPap */}
      <Label htmlFor="nuncaPap">Nunca Pap</Label>
      <Input
        type="text"
        name="nuncaPap"
        placeholder="Nunca Pap"
        {...register("nuncaPap")}
      />
  
      {/* pruebaColp */}
      <Label htmlFor="pruebaColp">Prueba Colp</Label>
      <Input
        type="text"
        name="pruebaColp"
        placeholder="Prueba Colp"
        {...register("pruebaColp")}
      />
  
      {/* fecColp */}
      <Label htmlFor="fecColp">Fec Colp</Label>
      <Input
        type="number"
        name="fecColp"
        placeholder="Fec Colp"
        {...register("fecColp")}
      />
  
      {/* fecUColp */}
      <Label htmlFor="fecUColp">Fec UColp</Label>
      <Input
        type="number"
        name="fecUColp"
        placeholder="Fec UColp"
        {...register("fecUColp")}
      />
  
      {/* resColp */}
      <Label htmlFor="resColp">Res Colp</Label>
      <Input
        type="text"
        name="resColp"
        placeholder="Res Colp"
        {...register("resColp")}
      />
  
      {/* resColp2 */}
      <Label htmlFor="resColp2">Res Colp2</Label>
      <Input
        type="text"
        name="resColp2"
        placeholder="Res Colp2"
        {...register("resColp2")}
      />
  
      {/* razonHister */}
      <Label htmlFor="razonHister">Razón Hister</Label>
      <Input
        type="text"
        name="razonHister"
        placeholder="Razón Hister"
        {...register("razonHister")}
      />
  
      {/* menstruacion */}
      <Label htmlFor="menstruacion">Menstruación</Label>
      <Input
        type="number"
        name="menstruacion"
        placeholder="Menstruación"
        {...register("menstruacion")}
      />
  
      {/* relaciones */}
      <Label htmlFor="relaciones">Relaciones</Label>
      <Input
        type="text"
        name="relaciones"
        placeholder="Relaciones"
        {...register("relaciones")}
      />
  
      {/* edadRelaciones */}
      <Label htmlFor="edadRelaciones">Edad Relaciones</Label>
      <Input
        type="number"
        name="edadRelaciones"
        placeholder="Edad Relaciones"
        {...register("edadRelaciones")}
      />
  
      {/* parejasSexuales */}
      <Label htmlFor="parejasSexuales">Parejas Sexuales</Label>
      <Input
        type="number"
        name="parejasSexuales"
        placeholder="Parejas Sexuales"
        {...register("parejasSexuales")}
      />
  
      {/* anticonceptivos */}
      <Label htmlFor="anticonceptivos">Anticonceptivos</Label>
      <Input
        type="text"
        name="anticonceptivos"
        placeholder="Anticonceptivos"
        {...register("anticonceptivos")}
      />
  
      {/* anticonceptivosOrales */}
      <Label htmlFor="anticonceptivosOrales">Anticonceptivos Orales</Label>
      <Input
        type="text"
        name="anticonceptivosOrales"
        placeholder="Anticonceptivos Orales"
        {...register("anticonceptivosOrales")}
      />
  
      {/* embarazo */}
      <Label htmlFor="embarazo">Embarazo</Label>
      <Input
        type="text"
        name="embarazo"
        placeholder="Embarazo"
        {...register("embarazo")}
      />
  
      {/* partos */}
      <Label htmlFor="partos">Partos</Label>
      <Input
        type="number"
        name="partos"
        placeholder="Partos"
        {...register("partos")}
      />
  
      {/* cesareas */}
      <Label htmlFor="cesareas">Cesáreas</Label>
      <Input
        type="number"
        name="cesareas"
        placeholder="Cesáreas"
        {...register("cesareas")}
      />
  
      {/* abortos */}
      <Label htmlFor="abortos">Abortos</Label>
      <Input
        type="text"
        name="abortos"
        placeholder="Abortos"
        {...register("abortos")}
      />
  
      {/* numAbortos */}
      <Label htmlFor="numAbortos">Num Abortos</Label>
      <Input
        type="number"
        name="numAbortos"
        placeholder="Num Abortos"
        {...register("numAbortos")}
        />
         {/* comoAborto */}
      <Label htmlFor="comoAborto">Cómo Aborto</Label>
      <Input
        type="text"
        name="comoAborto"
        placeholder="Cómo Aborto"
        {...register("comoAborto")}
      />
  
      {/* Otros campos del esquema van aquí... */}
  
      {/* Botón de guardar */}
      <Button type="submit">Save</Button>
    </form>
  </Card>
  );
  };
  
  
  
  