import { useContext, useEffect, useState } from "react";
import "../assets/styles/AssetsPreview.css";
import { UsersHeader } from "../components/UsersHeader/UsersHeader";
import { UsersList } from "../components/UsersList/UsersList";
import { getAllUsers } from "../helpers/getAllUsers";

export const UsersTable = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [transitAssets, setTransitAssets] = useState([]);

    useEffect(() => {
        const getAssets = async () => {
            const assets = await getAllUsers();
            setTransitAssets(assets);
            setIsLoading(false);
        }
        getAssets();
    }, [])
    console.log(transitAssets)
    return (
        <>
            <div className="aseets__container">
                <UsersHeader title="Tabla de usuarios" />
                {isLoading && <h2>Cargando activos...</h2>}
                {(transitAssets.length === 0) && "No se encontraron resultados..."}
                <UsersList assets={transitAssets} />
            </div>
        </>
    );
};
