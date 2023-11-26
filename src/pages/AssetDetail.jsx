import { useParams } from "react-router-dom";
import '../assets/styles/AssetDetail.css';
export const AssetDetail = () => {
  const { id } = useParams();

  return (
    <div className="asset-container">
      <div className='form-asset-container'>
        <form className='form-asset' >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cedula" className="label-asset">Cédula</label>
              <input
                type="text"
                id="cedula"
                name="cedula"
                className="input-asset"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nombre" className="label-asset">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="input-asset"
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellidos" className="label-asset">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                className="input-asset"
              />
            </div>
            <div className="form-group">
              <label htmlFor="departamento" className="label-asset">Departamento</label>
              <input
                type="text"
                id="departamento"
                name="departamento"
                className="input-asset"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="correo" className="label-asset">Correo Electrónico</label>
              <input
                type="text"
                id="correo"
                name="correo"
                className="input-asset"
              />
            </div>

            <div className="form-group">
              <label htmlFor="area" className="label-asset">Area</label>
              <input
                type="text"
                id="area"
                name="area"
                className="input-asset"
              />
            </div>

            <div className="form-group">
              <label htmlFor="codigo" className="label-asset">Codigo de activo</label>
              <input
                type="text"
                id="codigo"
                name="codigo"
                className="input-asset"
              />
            </div>
            <div className="form-group">
              <label htmlFor="descripcion" className="label-asset">Descripción del producto</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                required
                className="input-asset"
              />
            </div>
          </div>
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="movimiento" className="label-asset">Tipo de movimiento</label>
              <input
                type="text"
                id="movimiento"
                name="movimiento"
                className="input-asset"
              />
            </div>

            <div className="form-group">
              <label htmlFor="departamento-mover" className="label-asset">Departamento</label>
              <input
                type="text"
                id="departamento-mover"
                name="departamento-mover"
                className="input-asset"
              />
            </div>
            <div className="form-group">
              <label htmlFor="area-mover" className="label-asset">Area</label>
              <input
                type="text"
                id="area-mover"
                name="area-mover"
                className="input-asset"
              />
            </div>
            <div className="form-group">
              <label htmlFor="area-mover" className="label-asset">Exacta</label>
              <input
                type="text"
                id="exacta-mover"
                name="exacta-mover"
                className="input-asset"
              />
            </div>

          </div>
          <div className="form-row">
            <div className="form-group">
              <div className='button-asset-container'>
                <button type="submit" className="btn-asset">Solicitar activo</button>
              </div>
            </div>

          </div>




        </form>
      </div>
    </div>
  )
}
