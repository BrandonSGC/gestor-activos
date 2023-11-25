import { sendRequestStatus } from "../../helpers/sendRequestStatus";

export const RequestCard = ({request}) => {
  const { solicitudId, nombreUsuario, codigoActivo, estado } = request;

  const onApprove = async() => {
    console.log(`Aprobando solicitud con id: ${solicitudId}...`);
    const status = 'Aprobada';
    await sendRequestStatus(solicitudId, status);
  }

  const onReject = async() => {
    console.log(`Rechazando solicitud con id: ${solicitudId}...`);
    const status = 'Rechazada';
    await sendRequestStatus(solicitudId, status);
  }

  return (
    <li className="requests__request">
      <div className="requests__info">
        <p className="requests__data">
          Usuario: <span className="requests__user">{nombreUsuario}</span>
        </p>
        <p className="requests__data">
          Activo: <span className="requests__asset">{codigoActivo}</span>
        </p>
        <p className="requests__data">
          Estado: <span className="requests__status">{estado}</span>
        </p>
      </div>
      <div className="requests__actions">
        <button onClick={onApprove} className="requests__action">Aprobar</button>
        <button onClick={onReject} className="requests__action">Rechazar</button>
      </div>
    </li>
  );
};
