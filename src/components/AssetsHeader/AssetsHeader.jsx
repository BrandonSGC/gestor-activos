import { useContext } from "react";
import {UserContext} from '../../context/UserContext'
export const AssetsHeader = ({title}) => {

  const {user} = useContext(UserContext);
  
  return (
    <header className="assets__header">
      <div className="assets__display">
        <p className="assets__heading">{title}</p>
        <form className="assets__form">
          <input
            className="assets__input"
            type="text"
            placeholder="Buscar..."
          />
          <img className="assets__icon" src="/assets/search.svg" alt="icon" />
        </form>
      </div>
      <p className="assets__area">
        Area: <span>{user.AreaNombre}</span>
      </p>
    </header>
  );
};
