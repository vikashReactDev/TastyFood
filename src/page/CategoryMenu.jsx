import React, { useEffect, useState } from 'react'
import FoodData from './DataDetails/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from './Store/CategorySlice';


const CategoryMenu = () => {
  const selectcate = useSelector((state)=> state.category.category)
  const dispatch = useDispatch();
  const [category ,setCate] = useState([]);
  const listcategory =()=>
  {
    const uniquecategory =[...new Set(FoodData.map((food) => food.category)),];
    setCate(uniquecategory)
    console.log(uniquecategory)
  };
  useEffect(()=>{
    listcategory();
  },[])
  return (
    <div className='ml-6 justify-center'>
      <h3 className='text-2xl font-semibold'>Find The Best Food</h3>
      <div className='my-5 flex gap-3  overflow-x-scroll lg:overflow-hidden scroll-smooth'>
        <button onClick={()=>dispatch(setCategory("All"))} className= {`px-3 py-2 bg-gray-200 font-bold rounded-lg text-red-800 hover:bg-green-500 hover:text-white ${selectcate === "All" && "bg-green-500 text-white"}`}>All</button>
       {
        category.map((category,index)=>{return(
          <button onClick={()=>dispatch(setCategory(category))}
          key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectcate === category && "bg-green-500 text-white"}`}>{category}</button>
        )})
       }
      </div>
    </div>
  )
}

export default CategoryMenu
