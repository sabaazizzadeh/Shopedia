import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import SignUpPage from "./pages/signUpPage"
import Login from "./pages/login"
import Home from "./pages/home"
import ProductItem from "./components/productItem"
import Products from "./pages/products"
import ProductSection from "./components/productSection"
import SingleProductPage from "./pages/singleProductPage"


function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SignUp" element={<SignUpPage />}/>
        <Route path="/ProductItem" element={<ProductItem /> }/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Products/:id" element ={<Products />}/>
        <Route path="/SingleProductPage/:id" element ={<SingleProductPage />} />
      </Routes>
      
    
    </>
  )
}

export default App
