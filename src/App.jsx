import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import SignUp from './pages/Account/SignUp'
import Homepage from './pages/Home/homepage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,

  // BrowserRouter as Router,Routes,Route,

} from "react-router-dom";
import Layout from './components/Layout'
import ErrorPage from './components/Errorpage'
import Login from './pages/Account/login'
import Userpage from './pages/customer/Userpage'
import Tracking from './pages/customer/tracking'
import Request from './pages/customer/Request'
import Agent from './pages/Agent/Agentpage'
import Requests from './pages/Agent/Requests'
import Stats from './pages/Agent/Stats'
import User from './pages/Account/User'
import AgentAcc from './pages/Account/Agentacc'
import MerchantAcc from './pages/Account/Merchantacc'
import LoggedUser from './components/loggedUser'
import AuthProvider from './util/auth'
import ProtectedRoute from './util/protect'
import Landing from './components/Landing'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userAcc/users'
import parceltransfer from './services/parceltransfer'


const routir = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
     { path: "/",
      element: <Homepage />,
      errorElement:<ErrorPage/>},
      { path: "signin",
      element: <Login/>,
      errorElement:<ErrorPage/>},
      // SiguP to various account
      { path: "signup",
      element: <SignUp/>,
      errorElement:<ErrorPage/>,
      children:[
        { path:'user',
        element: <User />,
        errorElement:<ErrorPage/>},
        { path:'merchant',
          element: <MerchantAcc/>,
          errorElement:<ErrorPage/>},
          { path:'agent',
            element: <AgentAcc/>,
            errorElement:<ErrorPage/>}
       ]
    },


      { path: "pricing",
      element: <Agent/>,
      errorElement:<ErrorPage/>,
      children:[
        { index:true,
        element: <Requests />,
        errorElement:<ErrorPage/>},
        { path:'stats',
          element: <Stats/>,
          errorElement:<ErrorPage/>}
       ]},
      { path: "about",
      element: <Userpage/>,
      errorElement:<ErrorPage/>,
      children:[
        { index:true,
        element: <Tracking />,
        errorElement:<ErrorPage/>},
        { path: "request",
        element: <Request />,
        errorElement:<ErrorPage/>},
      ]
    }

    ]
  },
 ]);


function App() {




  let logged = useSelector(selectUser)
  const user =logged
  console.log(logged)
  //  console.log("Info" , user)

  const status = user?.role === "Agent"? true: false
  const statusid =user?.Customers[0]?.id
  // const role = user?.role === "Customer" || user?.role ==="Merchant"?['Access']:''

  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route>

        <Route element={<Layout />} errorElement={<ErrorPage/>} >
          <Route element={<Landing
           loader={async()=>{
  const response= await parceltransfer.getTransaction({"Id":statusid,"type":user?.role})
  return response
        }}
         users={user}/>} path='/'>
         {status? <Route  element= {<AuthProvider user={!!user && (user?.role === 'Agent')}/> }>
        <Route index element={<Requests/>}/>
        <Route path="stats" element={ <Stats/>}/>
        </Route>:
        <Route  element= {<AuthProvider user={!!user && (user?.role === 'Customer')||(user?.role === 'Merchant')}/> }>
        <Route index element={<Tracking/>}/>
        <Route path="request" element={ <Request user={user}/>}/>
        </Route>}  </Route>
          <Route  path= "signin" element= {<Login/>} errorElement={<ErrorPage/>}/>
        </Route>
      </Route>
    </Route>

    )
  )







  return (
    <div>
     <RouterProvider router={router} />
    </div>

    // <RouterProvider router={router} />
  )
}

export default App
