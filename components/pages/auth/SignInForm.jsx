import {useContext, useRef} from "react";
import {authContext} from "../../../contexts/AuthContextWrapper";
import { useRouter } from 'next/router'

const SignInForm = ()=>{
        //TODO:Hooks Refactoring Needed !
        const router = useRouter();
        const auth = useContext(authContext)
        const emailRef = useRef('')
        const passwordRef = useRef('')

        const signIn = async()=>{
            const email = emailRef.current.value
            const password = passwordRef.current.value
            console.log(email)
            console.log(password)
            if(email !== '' && password !== ''){
                const isSuccess = await auth.signIn(email, password)
                if(isSuccess){
                    router.back();
                }else{
                    console.log("NO WAY ")
                }
            }
        }

        return (
            <div>
                <div>
                    <div className="text-lg">
                        Email:
                    </div>
                    <input ref={emailRef} type="email" className="w-full px-2 py-2 border-tertiary border-2" placeholder="Please Enter your email ID"/>

                </div>
                <div className="mt-4">
                    <div className="text-lg">
                        Password:
                    </div>
                    <input ref={passwordRef} type="password" className="w-full px-2 py-2 border-tertiary border-2" placeholder="Please Enter your password.."/>

                </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-tertiary py-2 px-2 text-white" onClick={signIn}>
                        Sign In
                    </button>
                </div>
            </div>
        );
}

export  default  SignInForm;