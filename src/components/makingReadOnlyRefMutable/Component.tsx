import { useRef } from "react";

export const Component = () => {
  const firstOverLoad = useRef<string>('12324');
  
  firstOverLoad.current ='12323';

  const secondOverLoad =useRef<string>(null);

  const thirdOverLoad =useRef<string>();



  // Why is this not allowed?
  secondOverLoad.current = "Hello";

  return null;
};
