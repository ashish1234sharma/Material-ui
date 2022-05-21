import { useEffect, useState } from "react";

export const Stopwatch = () => {
    const [timer,setTimer]= useState(10);
    useEffect(()=>{
        // const id = setInterval(() => {
        //     console.log(timer);
        //     setTimer((prev)=>{
        //         if(prev<=1){
        //             clearInterval(id);
        //             return 0;
        //         }
                
        //         return prev-1;
        //     })  
        // }, 1000);
        //  return (()=> clearInterval(id))
        const id = setInterval(() => {
            console.log("kuch bi")
            setTimer(prevTimer => {
                if (prevTimer) {
                    return prevTimer - 1
                }
                clearInterval(id)
                return 0
                
            })

        }, 1000);
    },[])
    console.log({timer})
    
    return <h1>Timer: {timer}</h1>
    
}