import icon from '../assets/images/Vector.png'
function ButtonComponents(props) {
    return ( 
     
        <div className="flex justify-center items-center mt-5">
        <button className="bg-[#F47458] w-36 h-11 text-white rounded-3xl flex items-center justify-center gap-2 px-4 cursor-pointer">
          <span>{props.title}</span>
          <img  src={icon} alt="icon" />
        </button>
      </div>
     );
}

export default ButtonComponents;