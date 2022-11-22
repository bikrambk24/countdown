import React, { useContext, createContext } from "react";
import useCustomHook from "./useCustomHook";

const Context = createContext();

function CountDown() {
  const [time, setTime, getTime, currentTime] = useCustomHook();
  return (
    <>
      <Context.Provider value={{ time, setTime, getTime, currentTime }}>
        <Title />
        <SetTimer />
        <ClockTimer />
      </Context.Provider>
    </>
  );
}

const Title = () => {
  return (
    <>
      <h3 className="title">Countdown</h3>
    </>
  );
};

const SetTimer = () => {
  const context = useContext(Context);
  const handleClick = (event) => {
    if (context.getTime.current.value) {
      event.preventDefault();
      context.setTime(context.getTime.current.value);
      context.getTime.current.value = null;
    }
  };
  return (
    <>
      <form>
        <input
          type="number"
          ref={context.getTime}
          placeholder="Enter Time in Seconds"
          required
          min="0"
        />
        <button onClick={handleClick}>Set Time</button>
      </form>
    </>
  );
};

const ClockTimer = () => {
  const context = useContext(Context);
  if (context.currentTime) {
    return (
      <div className="clocktimer">
        {context.time ? context.time + "  : SEC" : "0 : SEC"}
      </div>
    );
  } else {
    return <div className="clocktimer">Time Expired</div>;
  }
};

export default CountDown;
