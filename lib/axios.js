import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const client = axios.create({
    baseURL,
})


export async function getProducts(){
    const {data} = await client.get("/api/products")
    
    
    return data ;
    
}

export async function getSingleProduct(id) {
    const {data} = await client("/api/products")
    // console.log({data});
    
}