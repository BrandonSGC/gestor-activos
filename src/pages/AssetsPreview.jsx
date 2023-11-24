import { AssetCard } from "../components/AssetCard/AssetCard";
import "../assets/styles/AssetsPreview.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const AssetsPreview = () => {
  const { user } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState([
    {
      assetId: 1,
      area: 'Bodega',
      modelo: 'Optix 3080',
      fechaRegistro: '5/6/2023',
      numSerie: 'X3BT011306',
      estado: 'En proceso de solicitud...',
      tipo: 'CPU',
    },
    {
      assetId: 2,
      area: 'Bodega',
      modelo: 'Optix 3080',
      fechaRegistro: '3/6/2022',
      numSerie: 'X3BT011306',
      estado: 'En proceso de solicitud...',
      tipo: 'Laptop',
    },
    {
      assetId: 3,
      area: 'Bodega',
      modelo: 'Optix 3080',
      fechaRegistro: '19/3/2021',
      numSerie: 'X3BT011306',
      estado: 'En proceso de solicitud...',
      tipo: 'Periféricos',
    },
  ]);

  useEffect(() => {
    const getAssets = async() => {
      setAssets(await getAssetsByArea(user.area));
      setIsLoading(false);
    }
    //getAssets();
  }, [])

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
            Area: <span>{user.area}</span>
          </p>
        </header>

        <section className="section">
          {isLoading && (<h2>Cargando activos...</h2>)}
          {
            assets.map(asset => (
              <AssetCard key={asset.assetId} asset={{...asset}}/>
            ))
          }
        </section>
      </div>
    </>
  );
};
