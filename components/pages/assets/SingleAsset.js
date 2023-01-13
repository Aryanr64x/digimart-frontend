import Image from "next/image";
import Link from "next/link";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import useCart from "../../../hooks/useCart.";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePayment from "../../../hooks/usePayment";

export default function SingleAsset({ asset }){
    const {cart, addToCart} = useCart(asset)
    const { makePayment } = usePayment()

    return (
        <div className=" flex flex-col shadow-primary shadow-sm rounded pb-4 hover:scale-105 transition-all duration-400">
            <img className="w-full h-48" src={asset.dp} alt="Display Image of the Asset"/>

            <div className="mt-4 grow px-2 flex flex-col justify-between">
               <div>
                   <Link href={'/assets/'+asset._id} className="flex justify-between hover:underline">
                        <h2 className="text-2xl font-federant">
                            { asset.title }
                        </h2>
                       <div className="text-xl">
                           ${ asset.price }
                       </div>
                   </Link>

                   <p className="">
                       { asset.summary }
                   </p>

               </div>
                <div className="mt-4 flex">
                    <div className="mr-4">
                        <button onClick={()=>{makePayment([asset])}} className="bg-primary text-sm text-secondary px-2 py-2 hover:opacity-80 transition-all duration-200">
                            <ShoppingCartCheckoutIcon  /> BUY NOW
                        </button>
                    </div>
                        <div>
                           <button  onClick={()=>{addToCart(asset)}} disabled={cart.has(asset)} className="bg-primary text-sm text-secondary px-2 py-2 hover:opacity-80 transition-all duration-200">
                               <ShoppingCartCheckoutIcon  /> ADD TO CART
                           </button>
                        </div>
                </div>


            </div>
        </div>
    )
}

