import { useEffect } from "react";

export default function Questions({
  questions,
  index,
  answer,
  setStates,
  seconds,
  minuts,
}) {
  useEffect(() => {
    setInterval(() => {
      setStates({ type: "timer" });
    }, 1000);
  }, [setStates]);

  return (
    <div
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
          <button className="timer py-4 px-5">
            0{minuts}:{seconds < 10 ? "0" : null}
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
        </div>
      }
    </div>
  );
}
