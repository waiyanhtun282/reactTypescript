import { ComponentProps } from "react";

type OverrideProps<T,TOverridden> =Omit<T, keyof TOverridden> & TOverridden;

// change to input so add to omit
// type InputProps = Omit<ComponentProps<"input">, "onChange"> & {
//   onChange: (value: string) => void;
// };

type InputProps = OverrideProps<ComponentProps<"input">, "onChange"> & {
  onChange: (value: string) => void;
};
export const Input = (
  props:InputProps
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

export const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

      }}
     className="borer bg-slate-100 py-2 ml-3 rounded-md"></Input>
  );
};
