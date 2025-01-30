import React from "react";
import Child from "./Child";

export default function AboutFunction() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // api call
    return () => {
      //componentWillUnmount
    };
    //console.log("Loading Time once only - compenentDidMount");
  }, []);
  useEffect(() => {
    console.log("all time");
  });
  useEffect(() => {
    console.log("Field onChange ");
    // similar to componentDidUpdate
  }, [count]);

  return (
    <div>
      AboutFunction
      <Child />
    </div>
  );
}
