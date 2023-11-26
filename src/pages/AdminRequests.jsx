import { useState } from "react";
import "../assets/styles/AdminRequests.css";
import { useReducer } from "react";
import { useEffect } from "react";
import { getAllRequests } from "../helpers/getAllRequests";
import { RequestCard } from "../components/RequestCard/RequestCard";

export const AdminRequests = () => {

  const [requests, setRequests] = useState([
    {
      solicitudId: 1,
      nombreUsuario: 'Brandon Gomez Carvajal',
      codigoActivo: 'IKSDH73234MSAO23',
      estado: 'Pendiente...'
    },
    {
      solicitudId: 2,
      nombreUsuario: 'Brandon Gomez Carvajal',
      codigoActivo: 'IKSDH73234MSAO23',
      estado: 'Pendiente...'
    },
    {
      solicitudId: 3,
      nombreUsuario: 'Brandon Gomez Carvajal',
      codigoActivo: 'IKSDH73234MSAO23',
      estado: 'Pendiente...'
    },
    {
      solicitudId: 4,
      nombreUsuario: 'Brandon Gomez Carvajal',
      codigoActivo: 'IKSDH73234MSAO23',
      estado: 'Pendiente...'
    },
    {
      solicitudId: 5,
      nombreUsuario: 'Brandon Gomez Carvajal',
      codigoActivo: 'IKSDH73234MSAO23',
      estado: 'Pendiente...'
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRequests = async () => {
      setRequests(await getAllRequests());
      setIsLoading(false);
    }
    // getRequests();
  }, [])


  return (
    <div className="requests">
      <div className="requests__container">
        <h1 className="requests__heading">
          Administración de Solitudes de Activos
        </h1>
        <div className="requests__display">
          <header className="requests__header">
            <p className="requests__filter">Filtrar por:</p>
            <button className="requests__button">Pendientes</button>
            <button className="requests__button">Aprobadas</button>
            <button className="requests__button">Rechazadas</button>
          </header>

          <ul className="requests__list">
            {requests.map( request => (
              <RequestCard key={request.solicitudId} request={{...request}}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
