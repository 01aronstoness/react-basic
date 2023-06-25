import React from "react";
import App from '../App'
import Login from '../components/Login'
import Singup from '../components/Singup'
import NotFound from "../components/NotFound";
import { Navigate, useRoutes} from 'react-router';

const Routing =() =>{
return useRoutes([
    { path:'', element: <Navigate to={'/app'}/>},
    { path:'/app', element: <App/>},
    {path:'/login/:id',element:<Login />},
    {path :'/singup', element:<Singup />},
    {path :'*', element:<NotFound />}
])
}

export default Routing;