import Error from "./Error";
import Finish from "./Finish";
import Loading from "./Loading";
import Progress from "./Progress";
import Questions from "./Questions";
import Start from "./Start";

export default function Content({
  status,
  setStates,
  questions,
  index,
  answer,
  points,
  progress,
  seconds,
  minuts,
}) {
  return (
    <>
      {status === "loading" && <Loading></Loading>}
      {status === "error" && <Error></Error>}
      {status === "start" && (
        <Start setStates={setStates} questions={questions}></Start>
      )}
      {status === "ready" && (
        <Progress
          questions={questions}
          progress={progress}
          points={points}
          index={index}
        ></Progress>
      )}
      {status === "ready" && (
        <Questions
          questions={questions}
          index={index}
          answer={answer}
          setStates={setStates}
          
        ></Questions>
      )}
      {status === "finish" && (
        <Finish
          questions={questions}
          setStates={setStates}
          points={points}
        ></Finish>
      )}
    </>
  );
}
