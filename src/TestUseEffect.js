import React ,{ useState,useEffect } from "react";


const TestUseEffect = () => {
    const [count, setcount] = useState(0)
    const [isOnTime,setIsOnTime] = useState(false)
    useEffect(() => {
        console.log("from use Effect");
        plusNumber();
    },  [count,isOnTime])
    const plusNumber = () => {
        if (isOnTime){
             console.log("from time count");
         setTimeout(()=> {
            setcount(count+1)
         },100);
       }
    }
    const OnOffSwitch = ()=>{
        setIsOnTime(!isOnTime)
        // if (isOnTime){
        //     setIsOnTime(false)
        //     console.log("switch off");
        // }else{
        //     console.log("switch on");
        //     setIsOnTime(true)
        // }

    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick = {()=>setIsOnTime(!isOnTime)}>PLUS NUMBER</button>
        </div>

    )
}
export default TestUseEffect;