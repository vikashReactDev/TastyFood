import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { remove,increment,decrement} from "./Store/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ItemCart = ({id,name,price,img,qty}) => {
  let dispatch = useDispatch()
  console.log("itemcart:"+{id,name,price,img,qty});
  
  return (
    <>
      <div className="flex gap-2 shadow-lg rounded-lg p-4  mb-6 relative hide-scrollbar ">
        <MdDelete onClick={()=>{dispatch(remove({id,price,name,qty,img}));
          toast(`${name} Removed!`,{icon:"👋"});
        }}  className="absolute  right-7 text-gray-600 cursor-pointer hover:text-red-500" />
        <img
          src={img}
          alt={name || "food item"}
          className=" w-[50px] h-[50px] rounded-md "
        />
        <div className="leading-5">
          <h2 className="font-semibold text-gray-800 text-sm">{name}</h2>
          <div className="flex justify-between ">
            <span className="text-green-500 font-semibold ">₹{price}</span>
          </div>
          <div className="flex justify-center items-center gap-2 absolute right-7 mb-6 ">
            <AiOutlinePlus  onClick={() =>
                qty >= 1 ? dispatch(increment({ id })) : (qty = 1)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <AiOutlineMinus onClick={()=>qty > 1 ? dispatch(decrement({id})) : (qty=1)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
