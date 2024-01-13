import React from "react"

interface ButtonProps {
 children:React.ReactNode;
 className:string;
 onClick:React.MouseEventHandler<HTMLButtonElement>
}
export const Button = ({children,className,onClick}:ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}
