import { useContext, useEffect, useState } from "react";
import "../assets/styles/AssetsPreview.css";
import { AssetsHeader } from "../components/AssetsHeader/AssetsHeader";
import { AssetsList } from "../components/AssetsList/AssetsList";
import { UserContext } from "../context/UserContext";
import { getAllAssets } from "../helpers/getAllAssets";

export const TransitWarehouse = () => {
  const { user } = useContext(UserContext);
  
  const [isLoading, setIsLoading] = useState(true);
  const [transitAssets, setTransitAssets] = useState([]);

  useEffect(() => {
    const getAssets = async() => {
      const assets = await getAllAssets();
      setTransitAssets(assets.filter(asset => asset.IDEstado === 2));
      setIsLoading(false);
    }
    getAssets();
  }, [])
  return (
    <>
      <div className="aseets__container">
        <AssetsHeader title="Bodega de Tránsito" user={user} />
        {isLoading && <h2>Cargando activos...</h2>}
        {(transitAssets.length === 0) && "No se encontraron resultados..."}
        <AssetsList assets={transitAssets}/>
      </div>
    </>
  );
};
