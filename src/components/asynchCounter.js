import React from "react";

const AsynchCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const delayCount = () =>
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);

  return (
    <>
      <h1 data-testid="Counter"> {counter} </h1>
      <button data-testid="button-up" onClick={delayCount}>
        Increment
      </button>
      <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </>
  );
};
export default AsynchCounter;
