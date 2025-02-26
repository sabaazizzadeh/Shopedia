import { Link } from 'react-router-dom';
import Logo from '../assets/images/Shopedia.png'
import shoppingCart from '../assets/images/shopping-cart.png'


function Navbar() {
    return (
        <div className='flex items-center justify-center h-16 bg-white rounded-3xl shadow'>
            <div className='mr-[600px]'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='flex'>
                <ul className='flex mr-5 font-light'>
                    <li className='mr-5 focus:bg-[#F06908] hover:text-[#F06908]'>
                        <Link to='/Products/:id'>Products</Link>
                       
                    </li>
                    <li className='focus:text-[#F06908] hover:text-[#F06908]'>
                        <Link to='/SignUp'>Sign up</Link>
                        
                    </li>
                </ul>
                <Link to = '/ProductItem'><img src={shoppingCart} alt="shoppingCart" /></Link>
            </div>
        </div>
    );
}

export default Navbar;