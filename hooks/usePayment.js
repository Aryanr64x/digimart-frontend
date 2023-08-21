import axios from "axios";
import BASE_URL from "../BASE_URL";
import {useRouter} from "next/router";
import {useContext} from "react";
import {authContext} from "../contexts/AuthContextWrapper";
import {toast} from "react-toastify";

const usePayment = ()=>{
    const router = useRouter();
    const auth = useContext(authContext)
    const notify = () => toast("Cannot Process Request at the moment");
    
    const makePayment = async(assets)=>{
       if(!auth.authUser){
           router.push('/auth');
       }else{
           try{
               const lineItems = []
               
               assets.forEach((asset)=>{
                    console.log({price: asset.priceId, quantity: 1})
                   lineItems.push({price: asset.priceId, quantity: 1})
               })

               const resp =  await axios.post(BASE_URL+'/payment', {
                   lineItems
               }, {headers:{
                       Authorization: "Bearer " + auth.token
                }})
               router.push(resp.data.url)
           }catch (e){
                console.log(e)
               notify()
           }
       }

    }

    return { makePayment }
}

export  default  usePayment;