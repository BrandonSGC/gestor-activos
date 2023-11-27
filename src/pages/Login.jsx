import React, { useContext, useState } from 'react';
import '../assets/styles/login.css';
import ForgotPasswordModal from '../components/ForgotPasswordModal/ForgotPasswordModal';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
    const {user, setUser} = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
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

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', loginData.username);
        formData.append('password', loginData.password);

        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setUser({...data.usuario});
                alert(data.mensaje);
            } else {
                alert('Credenciales invalidas...');
            }
        } catch (error) {
            console.error('Error en la solicitud HTTP:', error);
        }
    };

    return (
        <form className="login-container" onSubmit={handleLoginSubmit}>
            <label htmlFor="username" className='label-login'>Usuario</label>
            <input
                id="username"
                name="username"
                className='input-login'
                type="text"
                value={loginData.username}
                onChange={handleInputChange}
                title="El usuario debe contener una combinación de letras, números y caracteres especiales. Longitud mínima de 6 y máxima de 20."
                required
            />

            <label htmlFor="password" className='label-login'>Contraseña</label>
            <input
                id="password"
                name="password"
                className='input-login'
                type="password"
                value={loginData.password}
                onChange={handleInputChange}
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