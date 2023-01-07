import {useContext, useRef} from "react";
import auth from "../../../pages/auth";
import {authContext} from "../../../contexts/AuthContextWrapper";

const SignUpForm = ()=>{
    const auth = useContext(authContext)
    const email = useRef('');
    const password = useRef('');
    const password_repeat = useRef('');
    const username = useRef('');

    const signUp = async()=>{

        if(email.current.value !== "" && password_repeat.current.value !== "" && password.current.value!=="" && username.current.value !== ""){
            if(password.current.value === password_repeat.current.value){
                const isSuccess  = await auth.signUp(username.current.value,email.current.value, password.current.value, password_repeat.current.value);
                if(isSuccess){
                    console.log("YAY ITS A SUCCESS!")
                }else{

                }
            }else{
                console.log("The 2 passwords dont match")
            }
        }else{
            console.log("Please input the field carefully")
        }
    }





    return (
        <div>
            <div>
                <div className="text-lg">
                    Username:
                </div>
                <input ref={username} type="email" className="w-full px-2 py-2 border-tertiary border-2" placeholder="What is your name"/>

            </div>
            <div>
                <div className="text-lg">
                    Email:
                </div>
                <input ref={email} type="email" className="w-full px-2 py-2 border-tertiary border-2" placeholder="Please Enter your email ID"/>

            </div>
            <div className="mt-4">
                <div className="text-lg">
                    Password:
                </div>
                <input ref={password} type="password" className="w-full px-2 py-2 border-tertiary border-2" placeholder="Create a strong password"/>

            </div>
            <div className="mt-4">
                <div className="text-lg">
                    Password Confirm:
                </div>
                <input  ref={password_repeat} type="password" className="w-full px-2 py-2 border-tertiary border-2" placeholder="Repeat the password created above"/>

            </div>
            <div className="flex justify-end mt-4">
                <button className="bg-tertiary py-2 px-2 text-white" onClick={signUp}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export  default  SignUpForm;