import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Timer from "./Timer";

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
          <Timer
            questions={questions}
            index={index}
            answer={answer}
            setStates={setStates}
          ></Timer>
        </div>
      }
    </motion.div>
  );
}
