
export const AssetsHeader = ({title, user}) => {
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
        Area: <span>{user.area}</span>
      </p>
    </header>
  );
};
