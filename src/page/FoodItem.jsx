import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import FoodData from './DataDetails/FoodData.js'
import { useDispatch, useSelector } from 'react-redux'
import toast, {Toaster} from 'react-hot-toast';
import FoodCart from './FoodCart.jsx';



const  FoodItem = () => {
  const category =useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  const handleToast =(name)=> toast.success(`Added ${name}`);
 
  return (
   
    <>
        <Toaster position='top-center' reverseOrder= {false} />
        <div className='flex flex-wrap gap-10  justify-center lg:justify-start mx-6 my-10'>
            {
                 FoodData.filter((food)=>{
                  if(category === "All"){
                    return food.name.toLowerCase().includes(search.toLowerCase())
                  }
                  else{
                    return(
                    category === food.category &&
                    food.name.toLowerCase().includes(search.toLowerCase())
                    )
                  }
                 }).map((food)=> { return( <FoodCart
                    id={food.id}
                    image={food.img}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    handleToast={handleToast}
                />
                );
                }) 
                
                
            }
            
        </div>
    </>
  )
}

export default FoodItem
