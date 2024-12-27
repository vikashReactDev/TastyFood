import React, { useState } from 'react'
import { setSearch } from './Store/SearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import FoodData from './DataDetails/FoodData'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <>  <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 '>
        <div>
           <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0,16)}</h3> 
           <h3 className="text-3xl font-bold text-yellow-500">Tasty<span className='text-green-600'>Food</span></h3>
        </div>
        <div>
            <input type='search'
                autoComplete='off'
                placeholder='Search here...'
                name='search'
                id=''
        
                onChange={(e)=> dispatch(setSearch(e.target.value))}
                className='border border-gray-500 text-sm rounded-lg outline-none p-3 w-full lg:w-[350px]'
            />
        </div>
        </nav>
    </>
  )
}

export default Navbar
