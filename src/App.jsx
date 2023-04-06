import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import SignUp from './pages/Account/SignUp'
import Homepage from './pages/Home/homepage'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,Routes,Route
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


const router = createBrowserRouter([
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
 const InnerRoutes=<Route element={AuthProvider} errorElement={<ErrorPage/>}><Route  path='/' element={<Userpage />} >

  <Route element={<Tracking />} index errorElement={<ErrorPage/>}></Route>
  <Route element={<Request />} path='request' errorElement={<ErrorPage/>}></Route></Route>

 </Route>
function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route element={<Layout />} errorElement={<ErrorPage/>} >{!AuthProvider?
            <Route element={<Homepage/>} path='/'/>:

              InnerRoutes


            }
            <Route  path= "signin" element= {<Login/>} errorElement={<ErrorPage/>}/>


          </Route>
        </Routes>
      </Router>
    </div>

    // <RouterProvider router={router} />
  )
}

export default App
