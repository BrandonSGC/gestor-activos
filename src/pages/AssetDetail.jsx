import { useParams } from "react-router-dom";
import "../assets/styles/AssetDetail.css";
import { useContext, useEffect, useState } from "react";
import { getAssetById } from "../helpers/getAssetById";
import { UserContext } from "../context/UserContext";
import { createAssetRequest } from "../helpers/createAssetRequest";

export const AssetDetail = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [asset, setAsset] = useState({
    ActivoID: "",
    Area: "",
    Condicion: "",
    CondicionID: "",
    Departamento: "",
    DepartamentoID: "",
    Estado: "",
    EstadoID: "",
    Exacta: "",
    FechaAdquisicion: "",
    Marca: "",
    MarcaID: "",
    Modelo: "",
    ModeloID: "",
    Nombre: "",
    NumeroSerie: "",
  });

  useEffect(() => {
    const getAssetDetail = async () => {
      const assetData = await getAssetById(id);
      setAsset(assetData);
    };

    getAssetDetail();
  }, [id]);

  const handleSubmit = async(evt) => {
    evt.preventDefault();
    
    await createAssetRequest(asset.NumeroSerie, user.Cedula);
  }

  return (
    <div className="asset-container">
      <div className="form-asset-container">
        <form onSubmit={handleSubmit} className="form-asset">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre" className="label-asset">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="input-asset"
                value={asset.Nombre}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="numSerie" className="label-asset">
                Número de serie
              </label>
              <input
                type="text"
                id="numSerie"
                name="numSerie"
                className="input-asset"
                value={asset.NumeroSerie}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="estado" className="label-asset">
                Estado del activo
              </label>
              <input
                type="text"
                id="estado"
                name="estado"
                className="input-asset"
                value={asset.Estado}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="departamento" className="label-asset">
                Condición del activo
              </label>
              <input
                type="text"
                id="condicion"
                name="condicion"
                className="input-asset"
                value={asset.Condicion}
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="marca" className="label-asset">
                Marca
              </label>
              <input
                type="text"
                id="marca"
                name="marca"
                className="input-asset"
                value={asset.Marca}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="departamento" className="label-asset">
                Departamento
              </label>
              <input
                type="text"
                id="departamento"
                name="departamento"
                className="input-asset"
                value={asset.Departamento}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="area" className="label-asset">
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                className="input-asset"
                value={asset.Area}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="exacta" className="label-asset">
                Exacta
              </label>
              <input
                type="text"
                id="exacta"
                name="exacta"
                required
                className="input-asset"
                value={asset.Exacta}
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="modelo" className="label-asset">
                Modelo
              </label>
              <input
                type="text"
                id="modelo"
                name="modelo"
                className="input-asset"
                value={asset.Modelo}
                disabled
              />
            </div>
          </div>
          {(asset.EstadoID == 2) && <button type="submit" className="btn-inserts">Solicitar Activo</button>}
        </form>
      </div>
    </div>
  );
};
