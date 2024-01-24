type userType = {
    name?:string;
    parent:{
        father:string,
        mother:string,
    };
    subjects:string[];
    languages:{
   name:string;
   level:number;
    }[]
}
const Home = (props:userType) => {
    const usrname = props.name ? props.name :" John Doe"
  return (
    <div>
        <h1>Home Page</h1>
        <p> Name is {usrname}</p>
        <h4>Father name is {props.parent.father} and mother name is {props.parent.mother}</h4>
        <ul className=" ml-8">
            {props.subjects.map(item => <li>{item}</li> )}
        </ul>

         <ul className=" ml-8">
            {props.languages.map(item =>(
                 <div className="" key={item.name}>
                    <li>{item.name}</li>
                 <li>{item.level}</li>
                 </div>

                  ))}
        </ul>


    </div>
  )
}

export default Home