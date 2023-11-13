import { AssetCard } from "../components/AssetCard/AssetCard";
import "../assets/styles/AssetsPreview.css";

export const AssetsPreview = () => {
  return (
    <>
      <div className="aseets__container">
        <header className="assets__header">
          <div className="assets__display">
            <p className="assets__heading">Activos registrados</p>
            <form className="assets__form">
              <input
                className="assets__input"
                type="text"
                placeholder="Buscar..."
              />
              <img
                className="assets__icon"
                src="/assets/search.svg"
                alt="icon"
              />
            </form>
          </div>
          <p className="assets__area">
            Area: <span>Bodega</span>
          </p>
        </header>

        <section className="section">
          <AssetCard />
          <AssetCard />
          <AssetCard />
          <AssetCard />
        </section>
        
      </div>
    </>
  );
};
