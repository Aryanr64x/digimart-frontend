import {useEffect} from "react";

const Test = ({ state })=>{
    useEffect(()=>{
        // console.log("Child Rendered")
    },[])


    return (
        <div>
            Test component
        </div>
    );

}

export  default  Test;