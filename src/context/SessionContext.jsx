import { createContext, useContext } from "react";

const SessionContext = createContext()

export const useSession = () => {
    return useContext(SessionContext)
}

export const SessionProvider = ({children}) =>{
    
}