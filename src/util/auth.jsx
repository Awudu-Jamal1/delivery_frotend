import { Navigate, Outlet } from "react-router-dom";


function AuthProvider({user}) {

    return user ? <Outlet/> : <Navigate to='/signin'/>
}


export default  AuthProvider;