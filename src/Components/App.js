import React, { useEffect, useReducer, Children } from "react";
import Header from "./Header";
import Content from "./Content";
import Error from "./Error";
import Finish from "./Finish";
import Loading from "./Loading";
import Progress from "./Progress";
import Questions from "./Questions";
import Start from "./Start";

window.addEventListener("load", function () {
  this.document.querySelector(".header img").style.opacity = 1;
  this.document.querySelector(".header img").style.scale = 1;
  this.document.querySelector(".header img").style.rotate = "0deg";
  this.document.querySelector(".header h1").style.opacity = 1;
  this.document.querySelector(".header h1").style.scale = 1;
});

const initialStates = {
  questions: [],
  status: "loading",
  index: 0,
  progress: 0,
  answer: null,
  points: 0,
};

function statesFun(states, action) {
  switch (action.type) {
    case "error":
      return { ...states, status: "error" };
    case "data":
      return { ...states, questions: action.payload, status: "start" };
    case "start":
      return { ...states, status: action.payload };
    case "ready":
      return { ...states, status: "ready" };
    case "answer":
      return {
        ...states,
        answer: action.payload,
        points:
          action.payload === states.questions[states.index].correctOption
            ? states.questions[states.index].points + states.points
            : states.points,
        progress: states.progress + 1,
      };
    case "next":
      return {
        ...states,
        index: states.index + 1,
        answer: null,
        status:
          states.index + 1 === states.questions.length
            ? "finish"
            : states.status,
      };
    case "restart":
      return {
        ...states,
        status: "start",
        index: 0,
        progress: 0,
        answer: null,
        points: 0,
      };
    case "timer":
      return { ...states, status: action.payload };
    default:
      return "somthing Wrong";
  }
}

export default function App() {
  const [{ status, questions, index, answer, points, progress }, setStates] =
    useReducer(statesFun, initialStates);

  useEffect(function () {
    function questions() {
      setTimeout(async function () {
        try {
          const res = await fetch(
            "https://my-json-server.typicode.com/yas8295/demo/questions"
          );
          const data = await res.json();
          setStates({ type: "data", payload: data });
        } catch (error) {
          setStates({ type: "error" });
        }
      }, 3000);
    }
    questions();
  }, []);

  return (
    <div className="py-5">
      <Header></Header>
      <Content children={Children}>
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
      </Content>
    </div>
  );
}
