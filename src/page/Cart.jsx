import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCart from "./ItemCart";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  let [active, setActive] = useState(true);
  let naem = useSelector((state) => state.cart.cart);
  let totalqty = naem.reduce((total, item) => total + item.qty, 0);
  let totalprice = naem.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const navigate = useNavigate();
  
  return (
    <>
      <div
        className={`fixed right-0 top-0 bg-white w-full lg:w-[26vw] h-full p-5 mb-3 ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 overflow-hidden`}
      >
        <div className="flex justify-between items-center my-3 mx-2">
          <span className=" text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActive(!active)}
            className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300  cursor-pointer"
          />
        </div>
        <div className="overflow-y-auto max-h-[70vh] px-2 hide-scrollbar">
        {naem.length > 0 ? (
          naem.map((food) => {
            return (
              <ItemCart
                 id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : 
          <div className="text-center text-xl font-bold"><img  className="m-w-screen m-h-[350px]-schreen lg:h-[350] mt-24"src="https://cdni.iconscout.com/illustration/premium/thumb/boy-with-no-goods-in-shopping-cart-illustration-download-svg-png-gif-file-formats--empty-order-data-basket-pack-e-commerce-illustrations-10018100.png?f=webp"/></div>
        }
        </div>

        <div className="absolute bottom-0 w-full bg-white p-4">
          <h3 className="font-semibold text-gray-800 ml-4">Item:{totalqty}</h3>
          <h3 className="font-semibold text-gray-800 ml-4">
            Total Amount:{totalprice}
          </h3>

          <hr className="w-[90vw] lg:w-[18vw] my-2 mx-4" />
          <button
            onClick={() => navigate("/success")}
            className="px-3 py-2 mb-5 mx-5  text-white bg-green-600 hover:bg-green-700  w-[90vw]  lg:w-[16vw] rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActive(!active)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalqty > 0 && "animate-bounce delay-500 transition-all duration-500"
        } `}
      />
    </>
  );
};

export default Cart;

 
 
 
 
 
 