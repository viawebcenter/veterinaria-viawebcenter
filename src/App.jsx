import { useState, useEffect } from "react";
import Cabecera from "./componentes/Cabecera";
import Formulario from "./componentes/Formulario";
import ListaPacientes from "./componentes/ListaPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // DETECTAR QUE LOCAL STORAGE TENGA INFORMACIÓN
  // Local Storage:  se carga sólo una vez cuando el componente está listo
  // Verifica si en Local Storage hay información
  // Si hay algo, entonces se va a leer y se va a setear a pacientes
  // Así ya el state no será un arreglo vacío
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  // SINCRONIZAR LA DATA DEL FORMULARIO CON LOCAL STOGE
  //Local Storage:  Sincroniza el state con lo que haya en la variable pacientes
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Cabecera />
      <div className="mt-12 md:flex">
        <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListaPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  );
}

export default App;
