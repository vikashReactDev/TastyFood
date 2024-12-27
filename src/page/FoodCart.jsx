import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector} from "react-redux"
import { addToCart } from './Store/CartSlice';

const FoodCart = ({id,name,image,rating,desc,price,handleToast}) => {
    let dispatch = useDispatch();
    
  return (
<>
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img  src={image}
           alt={name || "food item"}
            className='w-auto h-[130px] bg-transparent hover:scale-110  cursor-grab transition-alll duration-500 ease-in-out'
        />
        <div className='flex justify-between '>
            <h3>{name || "Not a available"}</h3>
            <span className='text-green-600 font-semibold'>₹{price || "0"}</span>
        </div>
         <p className='text-sm font-normal'>{desc ? `${desc.slice(0, 50)}...` : "No description available."}</p>
         <div className='flex justify-between items-center'>
            <span className='flex items-center justify-center'><FaStar className='mr-1 text-yellow-500' />{rating || "N/A"}</span>
            <button onClick={()=>{dispatch(addToCart({id,name,image,price,qty:1})); handleToast(name);}} className='p-1 text-white bg-green-400 hover:bg-green-600  rounded-lg text-sm'>Add to Cart</button>
         </div>
            
    </div>
</>
   )
}

export default FoodCart
