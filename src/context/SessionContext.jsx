import { createContext, useContext, useState } from "react";

const SessionContext = createContext()

export const useSession = () => {
    return useContext(SessionContext)
}

export const SessionProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const login = (userData) => {
        setIsLoading(true);
        setUser(userData)
        setIsLoggedIn(true)
        setIsLoading(false);
    }

    const logout = (data) => {
        setIsLoading(true);
        if(data){
            setUser(null);
            setIsLoggedIn(false);
        }
        setIsLoading(false);
    }

    return <SessionContext.Provider value={{user, isLoggedIn, login, logout, isLoading}}>{children}</SessionContext.Provider>
}