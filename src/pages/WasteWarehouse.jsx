import { useContext, useEffect, useState } from "react";
import "../assets/styles/AssetsPreview.css";
import { AssetsHeader } from "../components/AssetsHeader/AssetsHeader";
import { AssetsList } from "../components/AssetsList/AssetsList";
import { UserContext } from "../context/UserContext";
import { getAllAssets } from "../helpers/getAllAssets";


export const WasteWarehouse = () => {
  const { user } = useContext(UserContext);
  
  const [isLoading, setIsLoading] = useState(true);
  const [wasteAssets, setWasteAssets] = useState([]);

  useEffect(() => {
    const getAssets = async() => {
      const assets = await getAllAssets();
      setWasteAssets(assets.filter(asset => asset.IDEstado === 3));
      setIsLoading(false);
    }
    getAssets();
  }, [])
  return (
    <>
      <div className="aseets__container">
        <AssetsHeader title="Bodega de Desecho"/>
        {isLoading && <h2>Cargando activos...</h2>}
        {(wasteAssets.length === 0) && "No se encontraron resultados..."}
        <AssetsList assets={wasteAssets}/>
      </div>
    </>
  );
};
