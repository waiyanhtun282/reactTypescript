export type ButtonProps ={
  className:string
}
const Button = (props:ButtonProps) =>{
  return (
    <button className={props.className}>
        click
    </button>
  )
}

export default Button