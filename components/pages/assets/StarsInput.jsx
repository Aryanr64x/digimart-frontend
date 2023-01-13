import { useState } from "react";

const StarsInput = ({onChosen}) => {
    const [ratings, setRatings] = useState([0, 0, 0, 0, 0])
    const toHighlight = (rating)=>{
        if (rating == 1){ return "fill-yellow-600" }
        else {
            return "fill-yellow-300"
        }

    }

    const onRated = (index)=>{
        const newRatings = [0, 0, 0 , 0, 0]
        for(let i = 0; i <= index; i ++){
            newRatings[i] = 1
        }
        setRatings(newRatings)
        onChosen(index+1)

    }
    return (
        <div className="flex mt-4">
            {
                ratings.map((rating, i) => {
                    return <svg onClick={()=>{onRated(i)}} className={"h-6  hover:fill-yellow-600 transition-all duration-200 cursor-pointer "+toHighlight(rating) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>

                })
            }
        </div>
    );
}

export default StarsInput;