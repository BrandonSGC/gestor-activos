import { Link } from "react-router-dom";
import './navbar.css'

const links = [
    {
        name: 'Login',
        href: '/login'
    },
    {
        name: 'Registrar Usuarios',
        href: '/register'
    },
    {
        name: 'Activos',
        href: '/assets'
    },
    {
        name: 'Modificar Usuario',
        href: '/modify-user'
    }
];

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                {links.map((link, index) => (
                    <Link key={index} to={link.href} className="navbarItem" > {link.name}</Link>
                ))}
            </ul>

        </nav>
    )
}

export default NavBar;