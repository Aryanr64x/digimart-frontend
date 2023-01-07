import Navbar from "../../components/utils/Navbar";
import SingleAsset from "../../components/pages/assets/SingleAsset";
import {ToastContainer} from "react-toastify";
import axios from "axios";
import BASE_URL from "../../BASE_URL";


const Assets = ({assets})=>{
    return (
        <div>
            <Navbar />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 mt-8 gap-x-8 gap-y-16 ">
                        {
                            assets.map((asset)=>{
                                return (<SingleAsset key={asset._id} asset={asset}  />)
                            })
                        }
                    </div>

            <ToastContainer />

        </div>
    )
}

export async function getStaticProps(context) {
    const resp = await axios.get(BASE_URL+'/assets/',   {headers: { "Accept-Encoding": "gzip,deflate,compress" }} )
    const assets = resp.data.data;
    return {
        props: {
            assets
        },
    }
}


export default Assets;

