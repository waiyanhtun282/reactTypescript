export const Button = (props: {
    children:React.ReactNode
}) => {
  return <button>{props.children}</button>;
};

export const Parent = () => {
  return (
    <div>
        <Button>
            Hello World
        </Button>
    </div>
  )
}