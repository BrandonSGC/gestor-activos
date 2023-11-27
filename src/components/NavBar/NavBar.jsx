import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './navbar.css'
import { UserContext } from '../../context/UserContext';

const defaultLinks = [
    {
        name: 'Login',
        href: '/login'
    }
];

const adminLinks = [
    {
        name: 'Registrar Usuarios',
        href: '/register'
    },
    {
        name: 'Activos',
        href: '/assets'
    },
    {
        name: 'Bodega de tránsito',
        href: '/assets/transit'
    },
    {
        name: 'Bodega de desecho',
        href: '/assets/waste'
    },
    {
        name: 'Modificar Usuario',
        href: '/modify-user/0'
    },
    {
        name: 'Administrar Solicitudes',
        href: '/admin/requests'
    },
    {
        name: 'Insertar Activos',
        href: '/admin/insert-items'
    },
    {
        name: 'Tabla de usuarios',
        href: '/admin/users'
    }
];

const usersLinks = [
    {
        name: 'Activos',
        href: '/assets'
    },
    {
        name: 'Bodega de tránsito',
        href: '/assets/transit'
    },
    {
        name: 'Bodega de desecho',
        href: '/assets/waste'
    },
    {
        name: 'Modificar Usuario',
        href: '/modify-user/0'
    },

];
const NavBar = () => {
    const { user } = useContext(UserContext);

    let linksToShow = defaultLinks;

    if (user) {
        switch (user.RolID) {
            case 1:
            case 2:
                linksToShow = adminLinks;
                break;
            case 3:
            case 4:
                linksToShow = usersLinks;
                break;
            default:
                break;
        }
    }

    return (
        <nav className="navbar">
            <ul>
                {linksToShow.map((link, index) => (
                    <Link key={index} to={link.href} className="navbarItem">
                        {link.name}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;