import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/register.css';
import { getAreas } from '../helpers/getAreas';
import { getDepartments } from '../helpers/getDepartments';
import { getRoles } from '../helpers/getRoles';
import { createUser } from '../helpers/createUser';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        cedula: '',
        nombre: '',
        apellidos: '',
        correo: '',
        Usuario: '',
        contraseña: '',
        area: '',
        departamento: '',
        rol: '',
    });

    const [areas, setAreas] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setAreas(await getAreas());
            setDepartamentos(await getDepartments());
            setRoles(await getRoles());
        }
        getData();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!/^[0-9]{9}$/.test(formData.cedula)) {
            alert("Por favor, ingrese una cédula válida de 9 dígitos numéricos");
            return;
        }

        if (!/^[A-Za-z ]{1,50}$/.test(formData.nombre)) {
            alert("El nombre debe contener solo letras y estar dentro del límite de 50 caracteres");
            return;
        }

        if (!/^[A-Za-z ]{1,50}$/.test(formData.apellidos)) {
            alert("Los apellidos deben contener solo letras y espacios, dentro del límite de 50 caracteres");
            return;
        }

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(formData.correo)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida en el formato usuario@ejemplo.com");
            return;
        }

        if (!/^[A-Za-z0-9]{1,20}$/.test(formData.Usuario)) {
            alert("El nombre de usuario debe ser único y puede contener solo caracteres alfanuméricos dentro del límite de 20 caracteres");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formData.contraseña)) {
            alert("La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial");
            return;
        }

        if (formData.area === '') {
            alert("Por favor, seleccione un área válida");
            return;
        }

        if (formData.departamento === '') {
            alert("Por favor, seleccione un departamento válido");
            return;
        }

        if (formData.rol === '') {
            alert("Por favor, seleccione un rol válido");
            return;
        }
        const usuarioData = {
            Cedula: parseInt(formData.cedula),
            Nombre: formData.nombre,
            PrimerApellido: formData.apellidos.split(' ')[0],
            SegundoApellido: formData.apellidos.split(' ')[1] || '',
            Contraseña: formData.contraseña,
            CorreoElectronico: formData.correo,
            RolID: parseInt(formData.rol),
            EstadoUsuarioID: 1,
            AreaID: parseInt(formData.area),
            DepartamentoID: parseInt(formData.departamento),
            Usuario: formData.Usuario
        };

        console.log(usuarioData);

        setFormData({
            cedula: '',
            nombre: '',
            apellidos: '',
            correo: '',
            Usuario: '',
            contraseña: '',
            area: '',
            departamento: '',
            rol: '',
        });

        await createUser(usuarioData);
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
                                name="Usuario"
                                value={formData.Usuario}
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
                                <option value="">--Seleccione una opción</option>
                                {areas.map(area => (
                                    <option key={area.AreaID} value={area.AreaID}>{area.NombreArea}</option>
                                ))}
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
                                <option value="">--Seleccione una opción</option>
                                {departamentos.map(departamento => (
                                    <option key={departamento.DepartamentoID} value={departamento.DepartamentoID}>{departamento.NombreDepartamento}</option>
                                ))}
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
                                <option value="">--Seleccione una opción</option>
                                {roles.map(rol => (
                                    <option key={rol.RolID} value={rol.RolID}>{rol.NombreRol}</option>
                                ))}
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