import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import SignUp from './pages/Account/SignUp'
import Homepage from './pages/Home/homepage'

function App() {


  return (
    <div classNameName="App">
      <Navbar/>
      {/* <Homepage/> */}
      <SignUp/>
    </div>
  )
}

export default App
