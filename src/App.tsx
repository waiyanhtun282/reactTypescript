import Home from "./components/waficolar/Union_sring_litreal/Home"


const App = () => {
 const parent ={
  father:'u ba',
  mother:'daw hla'
 }
 const subjects =['PHP',"nodejs","React",'Javascript'];
 const languages =[
  {
    name:'Myanmar',
    level:5
  },
    {
    name:'English',
    level:4
  },
  {
    name:'Phys',
    level:2
  },
 ]
  return (
    <div>
      app
      {/* <Components /> */}
      {/* <Button  className='px-2 py-2 bg-slate-200 '/> */}
      {/* <Parent /> */}
      {/* <Button className='text-white bg-slate-50' onClick={() =>{}}>
           CLick
        </Button> */}
        {/* <Parent/> */}
        {/* <Parent /> */}
        {/* <Tags />
         */}
         {/* <Component /> */}
       {/* <Tags /> */}
         {/* <useTimeout /> */}
         {/* <Buttons /> */}
         {/* <Component /> */}
         {/* <Component /> */}
         {/* <Component /> */}
         {/* <Component /> */}
         <Home   parent={parent} subjects={subjects} languages={languages}/>
    </div>
  )
}

export default App