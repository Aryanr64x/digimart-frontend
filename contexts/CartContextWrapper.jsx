import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BASE_URL from "../BASE_URL";
import { authContext } from "./AuthContextWrapper";
export const cartContext = React.createContext();

const CartContextWrapper = ({ children }) => {



    const [cart, setCart] = useState(new Set())
    const auth = useContext(authContext)

    useEffect(() => {
        if (auth.authUser) {
            getCart()
        }
    }, [auth.authUser])


    const getCart = async () => {
        try {
            const resp = await axios.get(BASE_URL + '/cart', {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })

            const cartSet = new Set(resp.data.data.assets)
            setCart(cartSet)
        } catch (e) {
            console.log(e)
        }

    }

    const insertToDatabase = async (asset) => {
        try {

            const resp = await axios.post(BASE_URL + '/cart', {
                asset: {
                    title: asset.title,
                    priceID: asset.priceID,
                    _id: asset._id,
                    price: asset.price
                }
            }, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            console.log(resp.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    const value = {
        cart, setCart, insertToDatabase
    };


    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextWrapper;