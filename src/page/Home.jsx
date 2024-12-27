import React from 'react'
import Navbar from './Navbar'
import FoodItem from './FoodItem'
import CategoryMenu from './CategoryMenu'
import Cart from './Cart'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
       <FoodItem/> 
       <Cart/>
      </div>
  )
}

export default Home
