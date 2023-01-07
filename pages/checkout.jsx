import Navbar from "../components/utils/Navbar";

import {useContext} from "react";
import {authContext} from "../contexts/AuthContextWrapper";
import {useRouter} from "next/router";

const Checkout = ()=>{
    const router = useRouter();
    const auth = useContext(authContext)

    return (
        <div>
            <Navbar />
            <button onClick={makePayment}>
                Buy Stuff
            </button>
        </div>
    );
}

export  default  Checkout;