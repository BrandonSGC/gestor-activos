import React, { useState } from 'react';
import '../assets/styles/register.css';

const RegisterPage = () => {
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
        // Aquí puedes agregar la lógica para enviar los datos al servidor o realizar otras acciones necesarias.
    };

    return (
        <div className="register-container">
            <div className='title-register'>
                <p>Crear nuevo usuario</p>
                <hr />
            </div>
            <div className='form-register-container'>
                <form className='form-register' onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cedula" className="label-register">Cédula</label>
                            <input
                                type="text"
                                id="cedula"
                                name="cedula"
                                value={formData.cedula}
                                onChange={handleInputChange}
                                pattern="[0-9]{9}"
                                required
                                className="input-register"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nombre" className="label-register">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                pattern="[A-Za-z ]{1,50}"
                                required
                                className="input-register"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos" className="label-register">Apellidos</label>
                            <input
                                type="text"
                                id="apellidos"
                                name="apellidos"
                                value={formData.apellidos}
                                onChange={handleInputChange}
                                pattern="[A-Za-z ]{1,50}"
                                required
                                className="input-register"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="correo" className="label-register">Correo Electrónico</label>
                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                value={formData.correo}
                                onChange={handleInputChange}
                                required
                                className="input-register"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="usuario" className="label-register">Usuario de Acceso:</label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                value={formData.usuario}
                                onChange={handleInputChange}
                                pattern="[A-Za-z0-9]{1,20}"
                                required
                                className="input-register"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contraseña" className="label-register">Contraseña:</label>
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleInputChange}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                                required
                                className="input-register"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="area" className="label-register">Área:</label>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                required
                                className="input-register"
                            >
                                {/* Opciones del área */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="departamento" className="label-register">Departamento</label>
                            <select
                                id="departamento"
                                name="departamento"
                                value={formData.departamento}
                                onChange={handleInputChange}
                                required
                                className="input-register"
                            >
                                {/* Opciones del departamento */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="rol" className="label-register">Rol</label>
                            <select
                                id="rol"
                                name="rol"
                                value={formData.rol}
                                onChange={handleInputChange}
                                required
                                className="input-register"
                            >
                                {/* Opciones del rol */}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn-register">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;