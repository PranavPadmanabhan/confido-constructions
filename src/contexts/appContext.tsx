import React, { useContext, useState } from "react";

type context = {
    drawerOpen:boolean;
    setDrawerOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const appContext = React.createContext<context>({} as context)

const AppContextProvider = ({ children }:{children:React.ReactNode}) =>{

     const [drawerOpen,setDrawerOpen] = useState(false)
    
    const value = { drawerOpen, setDrawerOpen }
    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext:() => context = () => useContext(appContext)