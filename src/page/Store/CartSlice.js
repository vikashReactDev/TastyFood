import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:"cart",
    initialState:{ 
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const aa = state.cart.find((item) => item.id === action.payload.id);
            if(aa){
                state.cart = state.cart.map((item)=> item.id === action.payload.id ? { ...item, qty: item.qty + 1} : item);
            }
            else
            {
                 state.cart.push({...action.payload,qty:1});
            }
        },
        remove:(state,action)=>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload.id)

        },
        increment:(state,action)=>{
            state.cart= state.cart.map((item)=>item.id === action.payload.id ? {...item,qty: item.qty+1}: item)
        },
        decrement:(state,action)=>{
            state.cart= state.cart.map((item)=>item.id === action.payload.id ? {...item,qty: item.qty-1}: item)
        },

    }
})

export let {addToCart,remove,increment,decrement}= CartSlice.actions;
export default CartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const initialState = JSON.parse(localStorage.getItem("cart")) || []
// const CartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//                 state.push(action.payload);
//                 localStorage.setItem('cart', JSON.stringify(state))
        
//         },
//         remove: (state, action) => {
//             const aa = state.filter((item) => item.id !== action.payload);
//             return aa
//             localStorage.setItem('cart', JSON.stringify(aa))
//         },
//         increment: (state, action) => {
//             const existingItem = state.find((item) => item.id === action.payload);
//             if (existingItem) {
//                 existingItem.qty += 1;
//             }
//             localStorage.setItem('cart', JSON.stringify(state))
//         },
//         decrement: (state, action) => {
//             const existingItem = state.find((item) => item.id === action.payload);
//             if (existingItem && existingItem.qty > 1) {
//                 existingItem.qty -= 1;
//             }
//             localStorage.setItem('cart', JSON.stringify(state))
//         },
//     },
// });

// export const { addToCart, remove, increment, decrement } = CartSlice.actions;
// export default CartSlice.reducer;
