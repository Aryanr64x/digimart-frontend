
import axios from "axios";
import { useContext, useRef, useState } from "react";
import BASE_URL from "../../../BASE_URL";
import { authContext } from "../../../contexts/AuthContextWrapper";
import StarsInput from "./StarsInput";

const NewReview = ({ asset, onSuccess }) => {
    const [showInput, setShowInput] = useState(false)
    const reviewText = useRef("")
    const rating = useRef(-1)
    const auth = useContext(authContext)

    const submitReview = async() => {
    
        if (reviewText.current.value !== "" || rating.current !== -1) {
            const body = {
                rating: rating.current,
                text: reviewText.current.value,
                user_id: auth.authUser._id,
                username: auth.authUser.username

            }
            try{
                const resp = await axios.post(BASE_URL + '/assets/' + asset._id + '/review',body ,{headers: {
                    Authorization: "Bearer " + auth.token
                }})
    
                const newReviews = resp.data.data.reviews;
                onSuccess(newReviews)
                reviewText.current.value = ""
                setShowInput(false)
            }catch(e){
                console.log(e.message)
            }
        }
    }


    return <div className="mt-8 mb-32">
        <button onClick={() => { setShowInput(!showInput) }} className="bg-primary text-sm text-secondary px-2 py-2 hover:opacity-80 transition-all duration-200">
            ADD A REVIEW
        </button>

        {
            (showInput) ? (<div>
                <StarsInput onChosen = {(val)=>{rating.current = val}} />
                <textarea  placeholder="Type in the review of the above asset" ref={reviewText} className="mt-4 px-2 py-2 w-full border-primary border-2 rounded-sm" />
                <div className="flex justify-end">
                    <button onClick={() => { submitReview() }} className="bg-primary text-sm mt-4 text-secondary px-2 py-2 hover:opacity-80 transition-all duration-200">
                        SUBMIT REVIEW
                    </button>
                </div>
            </div>) : ("")
        }
    </div>
}

export default NewReview;