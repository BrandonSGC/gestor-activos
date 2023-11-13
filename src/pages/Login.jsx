import React, { useState } from 'react';
import '../assets/styles/login.css';
import ForgotPasswordModal from '../components/ForgotPasswordModal/ForgotPasswordModal';

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        usuario: '',
        contraseña: '',
    });
    const [showModal, setShowModal] = useState(false);

    const handleForgotPasswordClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Datos de inicio de sesión:', loginData);
    };

    return (
        <form className="login-container" onSubmit={handleLoginSubmit}>
            <label htmlFor="usuario" className='label-login'>Usuario</label>
            <input
                id="usuario"
                name="usuario"
                className='input-login'
                type="text"
                value={loginData.usuario}
                onChange={handleInputChange}
                pattern="^[A-Za-z0-9]{6,20}$"
                title="El usuario debe contener una combinación de letras, números y caracteres especiales. Longitud mínima de 6 y máxima de 20."
                required
            />

            <label htmlFor="contraseña" className='label-login'>Contraseña</label>
            <input
                id="contraseña"
                name="contraseña"
                className='input-login'
                type="password"
                value={loginData.contraseña}
                onChange={handleInputChange}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$"
                title="La contraseña debe contener una combinación segura de al menos una letra mayúscula, una letra minúscula, un número y un carácter especial. Longitud mínima de 8 y máxima de 20."
                required
            />

            <span onClick={handleForgotPasswordClick} className='forgot-password-span'>¿Olvidaste tu contraseña?</span>
            <button className='btn-login' type="submit">Iniciar sesión</button>
            {showModal && <ForgotPasswordModal onClose={handleCloseModal} />}
        </form>
    );
};

export default LoginPage;