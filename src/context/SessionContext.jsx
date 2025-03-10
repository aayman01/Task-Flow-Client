import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext()

export const useSession = () => {
    return useContext(SessionContext)
}

export const SessionProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const user = sessionStorage.getItem("user");
        console.log("checking user from useEffect:", user);
        if(user){
            setUser(JSON.parse(user));
            setIsLoggedIn(true);
        }
        setIsLoading(false);
    }, []);


    const login = (userData) => {
        setIsLoading(true);
        setUser(userData)
        setIsLoggedIn(true);
        sessionStorage.setItem("user", JSON.stringify(userData));
        setIsLoading(false);
    }

    const logout = (data) => {
        setIsLoading(true);
        if(data){
            setUser(null);
            setIsLoggedIn(false);
            sessionStorage.removeItem("user");
        }
        setIsLoading(false);
    }

    return <SessionContext.Provider value={{user, isLoggedIn, login, logout, isLoading}}>{children}</SessionContext.Provider>
}