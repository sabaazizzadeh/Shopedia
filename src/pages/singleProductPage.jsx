import ButtonComponents from "../components/buttonComponent";
import productImg from '../assets/images/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium.webp'
import { useEffect } from "react";
import { useParams } from "react-router-dom";



function SingleProductPage() {




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto mt-16">
            <div>
                <img className="w-[500px] h-[300px] rounded shadow" src={productImg} alt="" />
            </div>
            <div>
                <h1>iPhone 16 Pro</h1>
                <p>Great powers come with great privacy.</p>
                <p>iPhone 16 Pro is splash, water, and dust resistant.4 It also has our latest-generation Ceramic Shield material that’s two times tougher than any smartphone glass. Talk about durable.</p>
                <span className="mb-96">$49.00</span>
                <ButtonComponents title="BUY IT" />
                <div className="bg-gray-400 h-0.5 mt-20"></div>
            </div>
        </div>
    );
}

export default SingleProductPage;