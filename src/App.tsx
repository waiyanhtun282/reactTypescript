import Components from "./components/Components"
import { Button } from "./components/TypingEventHandler/Button"
import { Parent } from "./components/usingHtmlProps/Parent"

const App = () => {

  return (
    <div>
      app
      <Components />
      {/* <Button  className='px-2 py-2 bg-slate-200 '/> */}
      {/* <Parent /> */}
      {/* <Button className='text-white bg-slate-50' onClick={() =>{}}>
           CLick
        </Button> */}
        <Parent/>
    </div>
  )
}

export default App