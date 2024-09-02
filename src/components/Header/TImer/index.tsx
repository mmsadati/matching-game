import { useEffect, useState } from "react";

interface Props {
  isGemeStart: boolean;
}

function Timer({ isGemeStart }: Props) {
  setInterval(() => {}, 1000);

  const [timeLeft, setTimeLeft] = useState<number>(120);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft || !isGemeStart) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, isGemeStart]);

  //   useEffect(() => {}, [isGemeStart]);

  return (
    <>
      <p>زمان: {timeLeft}</p>
    </>
  );
}

export default Timer;
