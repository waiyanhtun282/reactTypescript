import Components from "./components/Components"
import { Button } from "./components/TypingEventHandler/Button"

const App = () => {

  return (
    <div>
      app
      <Components />
      {/* <Button  className='px-2 py-2 bg-slate-200 '/> */}
      {/* <Parent /> */}
      <Button className='text-white bg-slate-50' onClick={() =>{}}>
           CLick
        </Button>
    </div>
  )
}

export default App