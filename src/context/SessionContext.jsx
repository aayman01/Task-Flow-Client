import { createContext, useContext, useState } from "react";

const SessionContext = createContext()

export const useSession = () => {
    return useContext(SessionContext)
}

export const SessionProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userData) => {
        setUser(userData)
        setIsLoggedIn(true)
    }

    const logout = (data) => {
        if(data){
            setUser(null);
            setIsLoggedIn(false);
        }
    }

    return <SessionContext.Provider value={{user, isLoggedIn, login, logout}}>{children}</SessionContext.Provider>
}