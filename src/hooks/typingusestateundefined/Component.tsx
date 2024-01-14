import { useEffect, useState } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
  // data add  null is false because we can change this  data  so I will add undefined that is nearly true;
  const [data, setData] = useState<Data | undefined>();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

  // type test = [Expect<Equal<typeof data, Data | undefined>>];
};