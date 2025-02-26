import { Link } from "react-router-dom";
import ButtonComponents from "./buttonComponent";

function ProductSection({ id, title, description, image, price, colors, category }) {

    
    

    return (
        <div>

            <Link to={`/SingleProductPage/${id}`}>
                <div className="bg-white shadow w-[352px] h-[416px]">
                    <img src={image} className="w-[352px] h-[240px]" alt={title} />
                    <div className="ml-5 mt-5">
                        <h1 className="font-bold text-3xl">{title}</h1> {/* اصلاح کلاس‌ها */}
                        <span className="font-light text-[#f47458] text-2xl">{price}</span>
                        <ButtonComponents title="BUY IT" />
                    </div>
                </div>

            </Link>
        </div>
    );
}

export default ProductSection;
