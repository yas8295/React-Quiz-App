import React, { useEffect, useState } from "react";

export default function Timer({ setStates, answer, questions, index }) {
  const [seconds, setSeconds] = useState(59);
  const [minuts, setminuts] = useState(3);

  const finish = minuts < 0;

  if (finish) {
    setStates({ type: "timer", payload: "finish" });
  }

  useEffect(() => {
    setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);
  }, [setSeconds]);
  return (
    <>
      <button className="timer py-4 px-5">
        0{seconds < 0 ? setminuts((m) => m - 1) : minuts}:
        {seconds < 10 ? (seconds < 0 ? setSeconds(59) : "0") : null}
        {seconds}
      </button>
      {answer || answer === 0 ? (
        <button
          onClick={(e) => setStates({ type: "next" })}
          className="next py-4 px-5"
        >
          {index + 1 === questions.length ? "Finish" : "Next"}
        </button>
      ) : null}
    </>
  );
}
