import React, { useEffect, useRef, useState } from "react";

export default function useOnlineStatus() {
  const count = useRef(0);
  const counter = useRef(false);
  const [onlineStatus, setOnlineStatus] = useState(false);
  useEffect(() => {
    console.log("counter.current" + counter.current);
    counter.current && clearInterval(counter.current);
    //counter.current = setInterval(() => {
    window.addEventListener("online", () => {
      console.log("online");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatus(false);
    });

    console.time();
    console.log("render = " + count.current);
    console.timeEnd();
    //}, 5000);
    return () => {
      console.log("cleanup");
      clearInterval(counter.current);
      window.removeEventListener("online", null);
      window.removeEventListener("offline", null);
    };
  }, []);
  console.log("render" + count.current);
  const statusMap = {
    online: "online",
    offline: "offline",
    updateOnlineStatus: (value) => {
      setOnlineStatus(value);
    },
  };
  return [onlineStatus, statusMap];
}
