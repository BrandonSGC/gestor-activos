import { useContext, useEffect, useState } from "react";
import "../assets/styles/AssetsPreview.css";
import { AssetsHeader } from "../components/AssetsHeader/AssetsHeader";
import { AssetsList } from "../components/AssetsList/AssetsList";
import { UserContext } from "../context/UserContext";
import { getAllAssets } from "../helpers/getAllAssets";

export const AssetsPreview = () => {
  const { user } = useContext(UserContext);
  
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const getAssets = async() => {
      const allAssets = await getAllAssets();
      setAssets(allAssets.filter(asset => asset.IdArea === user.AreaID));
      setIsLoading(false);
    }
    getAssets();
  }, [])
  return (
    <>
      <div className="aseets__container">
        <AssetsHeader title="Activos Registrados" user={user} />
        {isLoading && <h2>Cargando activos...</h2>}
        {(assets.length === 0) && "No se encontraron resultados..."}
        <AssetsList assets={assets}/>
      </div>
    </>
  );
};
