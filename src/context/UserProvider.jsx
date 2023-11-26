import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    AreaID: 1,
    area: 'Bodega'
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
