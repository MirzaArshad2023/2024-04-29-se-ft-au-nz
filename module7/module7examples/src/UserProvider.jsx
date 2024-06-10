import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({})

export default function UserProvider(props)
{
    const [currentUser, setCurrentUser]= useState({})

    function handleUpdateUser(user)
    {
        setCurrentUser(user)
    }

    return(
        <UserContext.Provider value={{currentUser, handleUpdateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}