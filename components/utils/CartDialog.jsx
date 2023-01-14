import {useContext} from "react";
import {cartContext} from "../../contexts/CartContextWrapper";

import usePayment from "../../hooks/usePayment";
import CloseIcon from '@mui/icons-material/Close';

const CartDialog = ({onClose})=>{
    const {cart, setCart} = useContext(cartContext)
    const {makePayment} = usePayment();
    const cartArray = Array.from(cart)
    console.log(cartArray)
    const cartTotal = ()=>{
        let sum = 0
        cartArray.forEach((asset)=>{
            sum+=asset.price
        })

        return sum
    }

    return (
        <div className="fixed h-full left-0 top-0  w-full bg-black flex justify-center items-center bg-opacity-70 z-50">


            <div  className="w-96 text-black shadow-black shadow-2xl rounded-md bg-white px-2 py-4  cart">

                <div className=" text-2xl flex items-center justify-between px-4 font-federant" >
               <span>
                    Cart
               </span>
                    <span className="cursor-pointer text-sm" onClick={onClose}>
                    <CloseIcon />
                </span>
                </div>
                <div className="py-4">
                    <ul>

                        {
                            cartArray.map((asset)=>{

                                return (<li className="flex items-center mt-8" key={asset._id}>
                                    <div className="mr-2">
                                        <img className="shadow-black w-24 shadow-sm rounded-sm sticky top-32" src={ asset.dp } alt="Display Image of the Asset"/>
                                    </div>
                                    <div className="text-lg font-federant">
                                        {asset.title} <span className="text-primary"> $ {asset.price} </span>
                                    </div>
                                </li>)
                            })
                        }


                    </ul>
                </div>
                <div  className="text-lg">
                    Total Amount : { cartTotal() }
                </div>
                <div className="flex justify-end ">
                    <button className="bg-primary text-secondary px-2 py-2 text-sm" onClick={()=>{makePayment(cartArray)}}>
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );

}

export  default  CartDialog;