import { Children, createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userAcc/users";
import { Navigate, Outlet,redirect } from "react-router-dom";


const useAuth=()=>{
    const user ={loggedIn:false}
    return user && user.loggedIn
}

const AuthContext = createContext()
function AuthProvider({children}) {
  const isAuth =useAuth()
// if (!isAuth){
//     throw  redirect('/signin')
// }
    return isAuth ? <Outlet/> : <Navigate to='/signin'/>
}


export default  AuthProvider;