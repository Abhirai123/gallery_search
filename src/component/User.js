import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router'

const User = () => {
    const { fname, lname } = useParams();
    const locate = useLocation();
    const hist = useHistory()
    return (
        <div>
            <h1>Hi.. this is User page</h1>
            <h1>I am {fname} {lname}</h1>
            <h3>Path URL :- {locate.pathname}</h3>
            {
            locate.pathname === "/user/Abhishek/Rai" ? 
            <>
            <button onClick={()=> hist.goBack()}>Back</button>
            <button onClick={()=> hist.push('/')}>Home</button>
            </>
            :null
            }
        </div>
    )
}

export default User
