import {useContext} from "react";
import {cartContext} from "../contexts/CartContextWrapper";
import {toast} from "react-toastify";
import {authContext} from "../contexts/AuthContextWrapper";
import {useRouter} from "next/router";

const useCart = ()=>{
    const {cart, setCart} = useContext(cartContext);
    const notify = () => toast("Item Added To Cart 😀!");
    const notifyFailure = ()=>toast("Cannot Add Multiple Assets of the same type")
    const auth = useContext(authContext)
    const router = useRouter()
    const addToCart = (asset)=>{
       if(!auth.authUser){
           router.push('/auth')
       }else{
           if(cart.has(asset)){
               notifyFailure()
           }else{
               setCart((cart)=>{
                   return cart.add(asset)
               })
               notify();
           }
       }
    }

    return {cart, addToCart}


}

export  default  useCart;