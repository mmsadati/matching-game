import { useState } from "react";

function Steps() {
  const [stepCounter, setStepCounter] = useState<number>(40);

  const handleIncCounter = () => {};
  const handleDecCounter = () => {};

  return (
    <>
      <p className="">تعداد حرکت: {stepCounter}</p>
    </>
  );
}

export default Steps;
