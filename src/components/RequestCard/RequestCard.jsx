import { sendRequestStatus } from "../../helpers/sendRequestStatus";

export const RequestCard = ({request, state}) => {
  const { SolicitudID, Usuario, Activo, EstadoSolicitud } = request;
  const {action, setAction} = state;

  const onApprove = async() => {
    console.log(`Aprobando solicitud con id: ${SolicitudID}...`);
    const status = 'Aprobada';
    await sendRequestStatus(SolicitudID, status);
    setAction(!action);
  }

  const onReject = async() => {
    console.log(`Rechazando solicitud con id: ${SolicitudID}...`);
    const status = 'Rechazada';
    await sendRequestStatus(SolicitudID, status);
    setAction(!action);
  }

  return (
    <li className="requests__request">
      <div className="requests__info">
        <p className="requests__data">
          Usuario: <span className="requests__user">{Usuario}</span>
        </p>
        <p className="requests__data">
          Activo: <span className="requests__asset">{Activo}</span>
        </p>
        <p className="requests__data">
          Estado: <span className="requests__status">{EstadoSolicitud}</span>
        </p>
      </div>
      <div className="requests__actions">
        <button onClick={onApprove} className="requests__action">Aprobar</button>
        <button onClick={onReject} className="requests__action">Rechazar</button>
      </div>
    </li>
  );
};
