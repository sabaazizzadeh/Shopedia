import ButtonComponents from "./buttonComponent";
import pic from '../assets/images/Group 2015.png'
import { Link } from "react-router-dom";

function LoginForm() {
    return ( 
        <div className="grid justify-center items-center py-10">
         <div className="grid justify-center items-center py-40 w-[598px] h-[747px] bg-white rounded-3xl shadow-2xl relative size-32">
         <div className="absolute top-0 right-0">
                    <img src={pic} alt="" />
         </div>
            <form className="grid w-[478px]">
                
                <span className="text-gray-400 mb-3">Welcome back !!!</span>
                <h1 className="font-bold text-5xl mb-3">Login</h1>

                

                <label className="mb-3 font-light mt-2">Email</label>
                <input className="bg-[#FFF6F4] border-none focus:border-none focus:outline-0 h-11 rounded-md" placeholder="Email" type="text" />

                <div className="label">

                    <label className="label-text mb-3 font-light mt-2">Password</label>
                    <span className="label-text-alt ml-80 font-light">Forgot Password ?</span>
                </div>

                <input className="bg-[#FFF6F4] border-none focus:outline-0 h-11 rounded-md" placeholder="Enter Password" type="text" />
                <ButtonComponents title="LOG IN" />

                <div className="text-center mt-3">
                    <a href="#" className="text-gray-400 font-light">
                    I don't have an account ? 
                    </a>
                    <Link to='/SignUp' className="text-[#F47458] font-light"> Sign up</Link>
                </div>


            </form>
        </div>
       </div>
     );
}

export default LoginForm;