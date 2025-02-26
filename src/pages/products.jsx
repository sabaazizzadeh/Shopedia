import { useEffect, useState } from "react";
import ProductItem from "../components/productItem";
import { getProducts } from "../../lib/axios";
import ProductSection from "../components/productSection";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        getProducts()
            .then((result) => {
           
                if (result.data && Array.isArray(result.data)) {
                    console.log(result.data.attributes);
                    
                    // setProducts(result.data); 
                }
                setLoading(false); 
            })
            .catch((error) => {
                console.log('You have an error:', error);
                setError(error); 
                setLoading(false);  
            });
    }, []);

  
    if (loading) {
        return <div>Loading...</div>;
    }

   
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-9 lg:grid-cols-4 gap-4 mt-12">
                {
                    products.map((item) => (
                        <Link to={`/Products/${item.id}`} key={item.id}>
                            <ProductSection {...item} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;
