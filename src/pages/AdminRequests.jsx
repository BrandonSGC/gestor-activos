import { useState } from "react";
import "../assets/styles/AdminRequests.css";
import { useEffect } from "react";
import { getAllRequests } from "../helpers/getAllRequests";
import { RequestCard } from "../components/RequestCard/RequestCard";

export const AdminRequests = () => {

  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState(false);

  useEffect(() => {
    const getRequests = async () => {
      setRequests(await getAllRequests());
      setIsLoading(false);
    }
    getRequests();
  }, [action])


  
  return (
    <div className="requests">
      <div className="requests__container">
        <h1 className="requests__heading">
          Administración de Solitudes de Activos
        </h1>
        <div className="requests__display">
          {/* <header className="requests__header">
            <p className="requests__filter">Filtrar por:</p>
            <button className="requests__button">Pendientes</button>
            <button className="requests__button">Aprobadas</button>
            <button className="requests__button">Rechazadas</button>
          </header> */}

          <ul className="requests__list">
            {isLoading && <p>Cargando solicitudes...</p>}
            {(requests.length == 0) && <p>No se han realizado solicitudes...</p>}
            {requests.map( request => (
              <RequestCard key={request.SolicitudID} request={{...request}} state={{action, setAction}}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
