import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Navbar from "../components/utils/Navbar";
import Link from "next/link";
import axios from "axios";
import BASE_URL from "../BASE_URL";
import {authContext} from "../contexts/AuthContextWrapper";


const Success = ()=>{
    const [state, setState] = useState('')
    const router = useRouter();
    const auth = useContext(authContext)
    useEffect(()=>{
            if (!router.isReady) return;
            getSessionData()

    }, [auth.token, router.isReady])
    const getSessionData = async ()=>{
        console.log(auth.token)
        console.log(router.query)
        try{

            const resp =  await axios.post(BASE_URL+'/payment/success', {session_id: router.query.session_id},{headers:{
                    Authorization: "Bearer " + auth.token
                }});
            console.log(resp.data)
        }catch(e){

        }
    }
    return (
        <div className="">

                <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center  px-24">
             <div className="text-3xl">
                 Thanks for buying tha digital asset. You asset can be accessed from the link sent to your mail!
             </div>
                <div className="mt-8">
                    <Link href={'/assets'}>Continue Shopping</Link>
                </div>
            </div>

        </div>
    );
}


export default Success;