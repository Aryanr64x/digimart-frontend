import React, {useState} from "react";
export  const cartContext = React.createContext();

const CartContextWrapper = ({ children })=>{


    const [cart, setCart] = useState(new Set())

    const value = {
        cart, setCart
    };


    return (
        <cartContext.Provider value={value}>
            { children }
        </cartContext.Provider>
    )
}
export  default  CartContextWrapper;