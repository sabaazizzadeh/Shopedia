import iphone from '../assets/images/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium.webp'

import trash from '../assets/images/Trash Can.png'
function ProductItem() {
    return (
        <div className="grid justify-center">
            <h1 className='text-2xl mt-4'>Products</h1>
            <div className='grid justify-center items-center'>
                <div className='flex bg-white rounded shadow w-[856px] h-[104px] mt-5'>
                    <div className='w-[72px] h-[72px] rounded-[8px] bg-white shadow border-1 border-gray-300 ml-5 mt-3'>
                        <img className='w-full h-full ' src={iphone} />
                    </div>

                    <div className='flex flex-col mt-3'>
                        <h1 className='ml-3 font-light'>SumSung Galaxy S8</h1>
                        <div className='flex'>

                            <span className='ml-3 text-blue-500'>399.99</span>
                            <img className='ml-4' src={trash} />
                        </div>
                    </div>
                    <div className='flex items-center ml-[500px]'>
                        <button className='cursor-pointer w-6 h-6 bg-white outline-1 outline-[#CBD5E1] text-[#b3b5b8]  rounded-md grid place-content-center mr-1.5 mt-1'>
                            -
                        </button>
                        <span>1</span>
                        <button className='cursor-pointer w-6 h-6 bg-[#F97316] text-white rounded-md  outline-1 outline-[#CBD5E1] grid place-content-center ml-1.5 mt-1'>
                            +
                        </button>
                    </div>
                </div>
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

        </div>
    );
}

export default ProductItem;
