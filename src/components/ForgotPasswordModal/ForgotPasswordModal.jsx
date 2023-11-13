import React, { useState } from 'react';
import './ForgotPassword.css'

const ForgotPasswordModal = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviar correo de restablecimiento a:', email);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='label-login' >Olvidaste tu contraseña</h2>
                <form className='form-modal' onSubmit={handleSubmit}>
                    <label className='label-login' htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        className='input-login'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button className='btn-login' type="submit">Enviar correo de restablecimiento</button>
                </form>
            </div>
        </div>
    );
};
export default ForgotPasswordModal;