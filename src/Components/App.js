import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Content from "./Content";

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
      <Content
        status={status}
        setStates={setStates}
        questions={questions}
        index={index}
        answer={answer}
        points={points}
        progress={progress}
      ></Content>
    </div>
  );
}
