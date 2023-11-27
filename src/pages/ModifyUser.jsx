import React, { useState, useContext, useEffect } from 'react';
import '../assets/styles/modifyUser.css';
import { UserContext } from '../context/UserContext';
import { getAreas } from '../helpers/getAreas';
import { getDepartments } from '../helpers/getDepartments';
import { getRoles } from '../helpers/getRoles';
import { createUser } from '../helpers/createUser';

import { useParams } from 'react-router-dom';
const ModifyUserPage = () => {
    const { id } = useParams();
    const { user, updateUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        cedula: id === '0' ? user.Cedula : '',
        nombre: id === '0' ? user.Nombre : '',
        apellidos: id === '0' ? `${user.PrimerApellido} ${user.SegundoApellido}` : '',
        correo: id === '0' ? user.Correo : '',
        usuario: id === '0' ? user.Usuario : '',
        contraseña: id === '0' ? user.Contraseña : '',
        area: id === '0' ? user.AreaID : '',
        departamento: id === '0' ? user.DepartamentoID : '',
        rol: id === '0' ? user.RolID : '',
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

    useEffect(() => {
        if (id !== '0') {
            fetch(`http://127.0.0.1:8000/usuarios/`)
                .then(response => response.json())
                .then(data => {
                    const usuarioEncontrado = data.find(usuario => usuario.Cedula.toString() === id);
                    console.log(usuarioEncontrado);
                    if (usuarioEncontrado) {
                        setFormData({
                            cedula: usuarioEncontrado.Cedula,
                            nombre: usuarioEncontrado.Nombre,
                            apellidos: `${usuarioEncontrado.PrimerApellido} ${usuarioEncontrado.SegundoApellido}`,
                            correo: usuarioEncontrado.CorreoElectronico,
                            usuario: usuarioEncontrado.Usuario,
                            contraseña: usuarioEncontrado.Contraseña,
                            area: usuarioEncontrado.Area,
                            departamento: usuarioEncontrado.Departamento,
                            rol: usuarioEncontrado.Rol,
                        });
                    }
                })
                .catch(error => console.error('Error al obtener datos del usuario:', error));
        }
    }, [id]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formularioData = new FormData();
            formularioData.append("nombre", formData.nombre);
            formularioData.append("primer_apellido", formData.apellidos.split(' ')[0]);
            formularioData.append("segundo_apellido", formData.apellidos.split(' ')[1]);
            formularioData.append("usuario", formData.usuario);
            formularioData.append("contrasena", formData.contraseña);
            formularioData.append("correo_electronico", formData.correo);
            formularioData.append("rol_id", formData.rol);
            formularioData.append("estado_usuario_id", 1);
            formularioData.append("area_id", formData.area);
            formularioData.append("departamento_id", formData.departamento);

            const cedula = formData.cedula;

            const response = await fetch(`http://127.0.0.1:8000/update-user/${cedula}`, {
                method: 'PUT',
                body: formularioData,
            });

            const data = await response.json();
            alert('Se modifico el usuario correctamente');
        } catch (error) {
            console.error('Error al enviar datos al servidor:', error);
        }
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
                                disabled
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
                                disabled={id !== 0}
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
                                disabled={id !== 0}
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
                                disabled={id !== 0}
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
                                disabled={id == 0}
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
                                disabled={id !== 0}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                                required
                                className="input-modify"
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
                                disabled={id == 0}
                                className="input-register"
                            >
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
                                disabled={id == 0}
                                className="input-register"
                            >
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
                                disabled={id == 0}
                                className="input-register"
                            >
                                {roles.map(rol => (
                                    <option key={rol.RolID} value={rol.RolID}>{rol.NombreRol}</option>
                                ))}
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