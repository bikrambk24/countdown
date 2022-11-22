import { useState, useRef, useEffect } from "react";

const useCustomHook = () => {
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(false);
  const getTime = useRef(0);

  useEffect(() => {
    if (time) {
      const interval = setInterval(() => {
        setCurrentTime(time);
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCurrentTime(!currentTime);
    }
  }, [time]);

  return [time, setTime, getTime, currentTime];
};

export default useCustomHook;
