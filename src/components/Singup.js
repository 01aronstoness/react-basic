import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
const Signup =(props)=>{
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams;
    console.log(props, location, params, navigate)
    return(
        <>
        <p>Signup called {location.state.name}</p>
        </>
    )
}

export default Signup;