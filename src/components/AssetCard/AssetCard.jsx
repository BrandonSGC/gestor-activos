import { Link} from "react-router-dom";
import "./AssetCard.css";

export const AssetCard = ({asset}) => {
  const {assetId, modelo, fechaRegistro, numSerie, estado, tipo} = asset;

  return (
    <div className="asset">
      <div className="asset__header">
        <p className="asset__model">
          Modelo del activo: <span>{modelo}</span>
        </p>
        <div className="asset__kind">
          <img src="/assets/computer.svg" alt="icon" />
          <span>{tipo}</span>
        </div>
      </div>

      <div className="asset__data">
        <div className="asset__registereddate">
          <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
          <p>
            Registrado desde: <span>{fechaRegistro}</span>
          </p>
        </div>

        <div className="asset__serialnumber">
          <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
          <p>
            Número de Serie: <span>{numSerie}</span>
          </p>
        </div>

        <div className="asset__status">
          <p>{estado}</p>
        </div>

        <Link to={`/assets/${assetId}`} className="asset__link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
