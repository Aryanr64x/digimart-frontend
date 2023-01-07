import ClassicButton from "../components/utils/ClassicButton";
import SignUpForm from "../components/pages/auth/SignUpForm";
import {useContext, useEffect, useState} from "react";
import SignInForm from "../components/pages/auth/SignInForm";
import {authContext} from "../contexts/AuthContextWrapper";
import {useRouter} from "next/router";

const AuthPage = ()=>{



    const auth = useContext(authContext);
    const router = useRouter();
    useEffect(()=>{
        if(auth.token !== null) {
            router.push('/assets')
        }
    }, [auth.token])


    const [showSignInForm, setShowSignInForm] = useState(true)
    return (
        <div className="min-h-screen bg-tertiary flex justify-center items-center ">
            <div className="bg-white shadow-black shadow-md w-96 rounded-lg">
                <div className="flex ">
                    <div className="grow text-center cursor-pointer px-8 py-2  hover:bg-gray-100 transition-all duration-300" onClick={()=>{setShowSignInForm(true)}}>
                        Sign In
                    </div>
                    <div className="grow text-center cursor-pointer px-8 py-2  hover:bg-gray-100 transition-all duration-300" onClick={()=>{setShowSignInForm(false)}}>
                        Sign Up
                    </div>
                </div>
                <div className="mt-2 px-2 pb-2">
                    {
                        (showSignInForm) ? (<SignInForm />) : (<SignUpForm />)
                    }
                </div>
            </div>
        </div>
    );
}

export  default  AuthPage;