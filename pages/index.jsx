
import {useRouter} from "next/router";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
const Index = () => {
    const router = useRouter();
    useEffect(()=>{
        AOS.init({
          duration: 1000
        })
      }, [])
  return (
    <div className="min-h-screen font-nunito text-primary px-4 sm:px-12 lg:px-24 grid grid-cols-3 hero">

        <div className="left flex flex-col justify-center col-span-3 lg:col-span-2">
                    <h1 className="font-federant    text-6xl lg:text-8xl" data-aos="fade-right">
                        Buy Digital Assets from all over the country
                    </h1>

                    <h2 className="mt-4 text-xl">
                        At Digi Dukaan , India is buying top digital assets from  the most creative people . Don’t stay behind! start browsing the assets now
                    </h2>

            <div className="mt-8 text-lg font-bold">
                <button href="/assets" className="px-4 py-2 bg-primary text-secondary mr-8 animate-bounce" onClick={()=>{router.push('/assets')}}>  BROWSE ASSETS </button>
                <button  href="/auth" className="px-4 py-2 border-2 border-primary" onClick={()=>{router.push('/auth')}}>  SIGN IN  </button>
            </div>
        </div>
        <div>

        </div>
 
    </div>
  );
}

export default Index;