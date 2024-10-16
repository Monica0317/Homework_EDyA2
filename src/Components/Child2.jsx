import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Child2 = () => {
    const { setUser } = useContext ( useContext );

    const onLogin = () => {
        setUser({
            id:313,
            name: 'Mónica Chicangana',
            email: 'monica.chicangana@uao.edu.co'
        })
    }

return(
    <>
      <div>Child Component 2</div>
      <button
         className="btn btn-primary"
         onClick={ () => onLogin()}
         >
            set User Info
         </button>
    
    </>
)
}