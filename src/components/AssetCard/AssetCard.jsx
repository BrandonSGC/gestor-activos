import { Link} from "react-router-dom";
import "./AssetCard.css";

export const AssetCard = ({asset}) => {
  const { IDActivo, Modelo, FechaAdquisicion, NumeroSerie, Estado, Marca } = asset;

  return (
    <div className="asset">
      <div className="asset__header">
        <p className="asset__model">
          Modelo del activo: <span>{Modelo}</span>
        </p>
        <div className="asset__kind">
          <img src="/assets/computer.svg" alt="icon" />
          <span>{Marca}</span>
        </div>
      </div>

      <div className="asset__data">
        <div className="asset__registereddate">
          <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
          <p>
            Registrado desde: <span>{FechaAdquisicion}</span>
          </p>
        </div>

        <div className="asset__serialnumber">
          <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
          <p>
            Número de Serie: <span>{NumeroSerie}</span>
          </p>
        </div>

        <div className="asset__status">
          <p>{Estado}</p>
        </div>

        <Link to={`/assets/${IDActivo}`} className="asset__link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
