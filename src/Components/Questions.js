import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Timer from "./Timer";
=======

export default function Questions({ questions, index, answer, setStates }) {
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
>>>>>>> 6d4e4aa3edb8162e8dc6b839cf2c988152699d97

export default function Questions({ questions, index, answer, setStates }) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="d-flex flex-column mx-auto justify-content-center align-items-center gap-5 px-3"
      style={{ maxWidth: "500px" }}
    >
      <h1
        className="m-0 text-center"
        style={{ fontSize: "22px", fontWeight: "400" }}
      >
        {questions[index].question}
      </h1>
      <div className="anserws d-flex align-items-center flex-column gap-4 w-100">
        {questions[index].options.map((ans, ind) => (
          <button
            key={ind}
            onClick={(e) => setStates({ type: "answer", payload: ind })}
            className={`${
              answer || answer === 0 ? (answer === ind ? "answer" : "") : ""
            } ${
              answer || answer === 0
                ? ind === questions[index].correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } px-5 py-4 col-12`}
            style={{ maxWidth: "500px" }}
            disabled={answer || answer === 0}
          >
            {ans}
          </button>
        ))}
      </div>
      {
        <div
          className="d-flex col-12 justify-content-between"
          style={{ maxWidth: "500px" }}
        >
<<<<<<< HEAD
          <Timer
            questions={questions}
            index={index}
            answer={answer}
            setStates={setStates}
          ></Timer>
=======
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
>>>>>>> 6d4e4aa3edb8162e8dc6b839cf2c988152699d97
        </div>
      }
    </motion.div>
  );
}
