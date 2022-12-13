import { useState, useEffect, createContext } from "react";


const AppContext = createContext()

const AppProvider = ({children}) => {
    const [userDatos, setUserDatos]= useState([]);
    const [userSkills, setUserSkills] =useState([]);

    useEffect(()=>{
        console.log(userSkills)
    },[userSkills])

    return(
        <AppContext.Provider
            value={{
                userDatos,
                setUserDatos,
                userSkills,
                setUserSkills,
            }}
        >
        {children}
        </AppContext.Provider>
    )
}
export{
    AppProvider
}
export default AppContext