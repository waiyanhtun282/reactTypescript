import React from "react";

interface Props{
    className:string;
    
}
export const Button:React.FC<Props>=(props) =>{
    return <button className={props.className}></button>
};


export const Parent = () => {
  return (
    <div>
        <Button className='my-class'></Button>
    </div>
  )
}


