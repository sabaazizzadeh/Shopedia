import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import SignUpPage from "./pages/signUpPage"
import Login from "./pages/login"
import Home from "./pages/home"

import Products from "./pages/products"


function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SignUp" element={<SignUpPage />}/>
        <Route path="/Product" element={<Products />}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      
    
    </>
  )
}

export default App
