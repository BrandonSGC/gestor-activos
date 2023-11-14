import React, { useState } from 'react';
import '../assets/styles/modifyUser.css';

const ModifyUserPage = () => {
    const [formData, setFormData] = useState({
        cedula: '',
        nombre: '',
        apellidos: '',
        correo: '',
        usuario: '',
        contraseña: '',
        area: '',
        departamento: '',
        rol: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <div className="modify-container">
            <div className='title-modify'>
                <p>Modificar usuario</p>
                <hr />
            </div>
            <div className='form-modify-container'>
                <form className='form-modify' onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cedula" className="label-modify">Cédula</label>
                            <input
                                type="text"
                                id="cedula"
                                name="cedula"
                                value={formData.cedula}
                                onChange={handleInputChange}
                                pattern="[0-9]{9}"
                                required
                                className="input-modify"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nombre" className="label-modify">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                pattern="[A-Za-z ]{1,50}"
                                required
                                className="input-modify"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos" className="label-modify">Apellidos</label>
                            <input
                                type="text"
                                id="apellidos"
                                name="apellidos"
                                value={formData.apellidos}
                                onChange={handleInputChange}
                                pattern="[A-Za-z ]{1,50}"
                                required
                                className="input-modify"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="correo" className="label-modify">Correo Electrónico</label>
                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                value={formData.correo}
                                onChange={handleInputChange}
                                required
                                className="input-modify"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="usuario" className="label-modify">Usuario de Acceso:</label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                value={formData.usuario}
                                onChange={handleInputChange}
                                pattern="[A-Za-z0-9]{1,20}"
                                required
                                className="input-modify"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contraseña" className="label-modify">Contraseña:</label>
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleInputChange}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                                required
                                className="input-modify"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="area" className="label-modify">Área:</label>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                required
                                className="input-modify"
                            >
                                {/* Opciones del área */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="departamento" className="label-modify">Departamento</label>
                            <select
                                id="departamento"
                                name="departamento"
                                value={formData.departamento}
                                onChange={handleInputChange}
                                required
                                className="input-modify"
                            >
                                {/* Opciones del departamento */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="rol" className="label-modify">Rol</label>
                            <select
                                id="rol"
                                name="rol"
                                value={formData.rol}
                                onChange={handleInputChange}
                                required
                                className="input-modify"
                            >
                                {/* Opciones del rol */}
                            </select>
                        </div>
                    </div>
                    <div className='button-modify-container'>
                        <button type="submit" className="btn-modify">Guardar cambios</button>
                        <button type="submit" className="btn-modify">Cancelar</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default ModifyUserPage;