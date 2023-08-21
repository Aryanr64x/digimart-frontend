
import Navbar from "../components/utils/Navbar";
import Link from "next/link";


const Success = ()=>{
   
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