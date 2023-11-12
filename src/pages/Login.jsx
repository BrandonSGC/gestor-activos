import '../assets/styles/login.css'

const LoginPage = () => {
    return (
        <div className="login-container">
            <label htmlFor="mail" className='label-login'>Correo</label>
            <input id="mail" className='input-login' type="text" />
            <label htmlFor="password" className='label-login'>Contraseña</label>
            <input id="password" className='input-login' type="text" />
            <a href="">¿Olvidaste tu contraseña?</a>
            <button className='btn-login' >Iniciar sesión</button>
        </div>
    )
}

export default LoginPage;