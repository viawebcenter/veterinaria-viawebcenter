import Paciente from "./Paciente";

export default function ListaPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h1 className="font-black text-3xl text-center">Lista de Pacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ) : (
        <>
          <h1 className="font-black text-3xl text-center">No hay Pacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      )}
    </div>
  );
}
