import { useEffect, useState } from "react";
import ButtonComponents from "../components/buttonComponent";
import ProductItem from "../components/productItem";
import { client } from "../../lib/axios";

function Products() {

    const[isLoading , setIsLoading] = useState(false)

    const getProductsFromApi = async() => {
        try{
            setIsLoading(true)
            const response =await client.get("/products");
            console.log(response);
            
        }
        catch{

        }
    }



    useEffect(()=>{
        getProductsFromApi()
    } , [])

    return ( 
        <div className="grid justify-center">
            <h1>Products</h1>
             <ProductItem />
             <div className="h-1 w-[850px] bg-[#CBD5E1] mt-3"></div>
             <div className="flex flex-row justify-between mt-3">
                <h1 className="font-light">Total</h1> 
                <button className="bg-[#F47458] w-36 h-8 text-white rounded-3xl flex items-center justify-center gap-2 px-4 font-light hover:bg-[#22C55E] cursor-pointer
                transition delay-200 ease-in-out hover:-translate-y-1 hover:scale-110 "> 
                    Total Price
                </button>
               
             </div>
            <div className="flex justify-center">
            <button className="text-[#324E25] bg-[#CBCDCD] w-24 h-7 rounded cursor-pointer font-light">
                    Clear Cart
            </button>
            </div>
        </div>
     );
}

export default Products;