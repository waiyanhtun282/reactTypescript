import { ComponentProps } from "react";
import { NavBar } from "./NavBar";
import { Equal, Expect } from "../../helpers/type-utils";

 type NavBarProps = ComponentProps<typeof NavBar>;




type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;