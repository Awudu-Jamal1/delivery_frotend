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
      { path: "about",
      element: <Userpage/>,
      errorElement:<ErrorPage/>}

    ]
  },
 ]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
