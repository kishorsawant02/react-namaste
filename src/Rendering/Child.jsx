import React from "react";

export default function Child() {
  useEffect(() => {
    //

    return () => {
      //componentWillUnmount
    };
    //console.log("Loading Time - One Time");
  }, []);
  useEffect(() => {
    console.log("all time");
  });
  useEffect(() => {
    console.log("Field onChange ");
  }, [1]);
  return <div>Child</div>;
}
