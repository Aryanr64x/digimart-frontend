import {useContext, useState} from "react";
import {authContext} from "../../contexts/AuthContextWrapper";
import CartDialog from "./CartDialog";
import Link from "next/link";
import Person4Icon from '@mui/icons-material/Person4';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ()=>{
    const auth = useContext(authContext)
    const [expand, setExpand] = useState(false)
    const user = auth.authUser
    const [showCart, setShowCart] = useState(false)
    const signOut = ()=>{
        auth.signOut();
    }

    return (
        <div className="bg-primary relative  text-secondary  flex justify-between  px-4 sm:px-12 lg:px-32 py-3">
            <Link href={'/assets'} className="text-3xl font-federant">
                digimart.
            </Link>
          <div className={"w-full lg:w-auto left-0 bg-primary pb-6 lg:pb-0 z-50 top-full   lg:flex items-center menu "+((expand) ? "absolute" : "hidden")}>
              {
                  (user) ? (<div className=" h-full flex">
                      <div className="mr-8 cursor-pointer flex  items-center hover:border-b-secondary hover:border-b-4 transition-all duration-300 -mb-3 mr-4">
                          <Person4Icon className="mr-2" />
                          {user.username}
                      </div>
                      <div className="flex flex-col justify-center hover:border-b-secondary hover:border-b-4 transition-all duration-300 -mb-3 mr-8">
                          <button onClick={()=>{setShowCart(!showCart)}}>
                              <ShoppingCartIcon className="mr-2" />
                              Cart
                          </button>
                      </div>
                      <div className="flex flex-col justify-center hover:border-b-secondary hover:border-b-4 transition-all duration-300 -mb-3 mr-8">
                          <PowerSettingsNewIcon onClick={signOut} className="cursor-pointer" />
                      </div>
                  </div>) : (
                      <Link href={'/auth'}  className="mt-2 cursor-pointer ">
                          Sign In
                      </Link>
                  )
              }

          </div>

            <div className="block lg:hidden mt-2">
                <MenuIcon className="cursor-pointer" onClick={()=>{setExpand(!expand)}}/>
            </div>
            {
                (showCart) ? ( <CartDialog onClose={()=>{setShowCart(false)}} />) : ("")
            }
        </div>
    );
}

export default Navbar;