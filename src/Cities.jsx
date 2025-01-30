import React, { useEffect } from "react";

export default function Cities() {
  useEffect(() => {
    getCities();
  }, []);
  const getCities = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("error" + error);
    }
  };
  return (
    <div>
      <h1>Cities</h1>
    </div>
  );
}
