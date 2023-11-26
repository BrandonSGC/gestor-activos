import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    AreaID: 3,
    AreaNombre: "",
    Cedula: "",
    Contraseña: "",
    Correo: "",
    DepartamentoID: "",
    DepartamentoNombre: "",
    EstadoUsuarioID: "",
    EstadoUsuarioNombre: "",
    Nombre: "",
    PrimerApellido: "",
    RolID: "",
    RolNombre: "",
    SegundoApellido: "",
    Usuario: "",
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
