import axios from "axios";
import BASE_URL from "../../BASE_URL";
import Reviews from "../../components/pages/assets/Reviews";
import Navbar from "../../components/utils/Navbar";
import useCart from "../../hooks/useCart.";
import usePayment from "../../hooks/usePayment";

const AssetPage = ({asset}) => {

    const { cart, addToCart } = useCart(asset);
    const { makePayment } = usePayment();


    return (
        <div>
            <Navbar />
            <div className="h-screen grid grid-cols-1 lg:grid-cols-2 px-4  overflow-y-scroll mt-8 lg:mt-0" >
                    <div className="  ">

                        <img className={"shadow-black shadow-sm rounded-sm sticky top-32"} src={asset.dp} alt="Display Image of the Asset"/>

                    </div>
                    <div className=" flex flex-col items-start pl-8 pt-12  " >
                        <h1 className="text-6xl font-federant">
                            { asset.title }
                        </h1>
                        <span className="text-primary text-3xl">${ asset.price }</span>
                        <h3 className="mt-4 text-lg">
                            {asset.summary}
                        </h3>
                        <div className="pt-8">
                            <button className="bg-primary text-secondary font-bold py-2 px-3 animate-bounce mr-8" onClick={()=>{makePayment([asset])}}> BUY NOW </button>

                            <button className="py-2 px-2 border-2 border-primary hover:bg-primary hover:text-secondary transition-all duration-200" onClick={()=>{addToCart(asset)}} disabled={cart.has(asset)}>Add to cart</button>


                        </div>

                        <div className="mt-12">
                            {asset.description}
                        </div>
                    </div>
            </div>
            <Reviews reviews={asset.reviews}   asset = {asset} />

        </div>
    );
}

export async function getStaticPaths() {
    const resp = await axios.get(BASE_URL+'/assets', {headers: { "Accept-Encoding": "gzip,deflate,compress" }});
    const assets = resp.data.data;
    return {
        paths: assets.map((asset) => {
            return {
                params:{
                    id: `${asset.id}`
                }
            }
        }),
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {
    const resp = await axios.get(BASE_URL+'/assets/'+context.params.id, {headers: { "Accept-Encoding": "gzip,deflate,compress" }})
    const asset = resp.data.data;
    return {
        props: {asset},
    }
}


export default AssetPage;