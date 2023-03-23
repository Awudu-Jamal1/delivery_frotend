import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import SignUp from './pages/Account/SignUp'
import Homepage from './pages/Home/homepage'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout'
import ErrorPage from './components/Errorpage'
import Login from './pages/Account/login'
import Userpage from './pages/customer/Userpage'
import Tracking from './pages/customer/tracking'
import Request from './pages/customer/Request'
import Agent from './pages/Agent/Agentpage'

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
      { path: "pricing",
      element: <Agent/>,
      errorElement:<ErrorPage/>},
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
  return (
    <RouterProvider router={router} />
  )
}

export default App
