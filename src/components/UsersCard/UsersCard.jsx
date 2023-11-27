import { Link } from "react-router-dom";
import "./UsersCard.css";

export const UsersCard = ({ asset }) => {
    const { Cedula, Nombre, Rol } = asset;

    return (
        <div className="asset">
            <div className="asset__header">
                <p className="asset__model">
                    Nombre de usuario: <span>{Nombre}</span>
                </p>

            </div>

            <div className="asset__data">
                <div className="asset__registereddate">
                    <img className="asset__icon" src="/assets/paragraph.svg" alt="icon" />
                    <p>
                        Rol: <span>{Rol}</span>
                    </p>
                </div>

                <div className="asset__serialnumber">

                    <p>

                    </p>
                </div>

                <div className="asset__status">

                </div>

                <Link to={`/modify-user/${Cedula}`} className="asset__link">
                    Modificar usuario
                </Link>
            </div>
        </div>
    );
};
