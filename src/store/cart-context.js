import React from 'react';

const CartContext=React.createContext({
    items:[],
    totalaAmount:0,
    addItem:(item)=>{},
    removeItem:(item)=>{}
})


export default CartContext;