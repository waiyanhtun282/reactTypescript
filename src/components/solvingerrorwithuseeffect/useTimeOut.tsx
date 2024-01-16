import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
   useEffect(() =>{
    const timoeout =setTimeout(() =>{
        console.log('Done!');
    },timerMs);
    return () =>{
        clearTimeout(timoeout)
    }
   },[timerMs])
};
