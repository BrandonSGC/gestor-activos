import { Link } from "react-router-dom";
import "./AssetCard.css";

export const AssetCard = () => {
  return (
    <div className="asset">
      <div className="asset__header">
        <p className="asset__model">
          {" "}
          Modelo del activo: <span>Optilex 3080</span>
        </p>
        <div className="asset__kind">
          <span>CPU</span>
          <img src="" alt="icon" />
        </div>
      </div>

      <div className="asset__data">
        <div className="asset__registereddate">
          <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
          <p>
            Registrado desde: <span>8/6/2023</span>
          </p>
        </div>

        <div className="asset__serialnumber">
          <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
          <p>
            Número de Serie: <span>X3BT011306</span>
          </p>
        </div>

        <div className="asset__status">
          <p>En proceso de solicitud</p>
        </div>

        <Link to={`#`} className="asset__link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
