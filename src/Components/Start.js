export default function Start({ setStates, questions }) {
  return (
    <div className="text-center d-flex mt-sm-5 mt-0 flex-column justify-content-center align-items-center">
      <h1 className="m-0 mt-5" style={{ fontSize: "40px" }}>
        Welcome to The React Quiz!
      </h1>
      <p style={{ fontSize: "25px" }}>
        {questions.length} questions to test your React mastery
      </p>
      <button
        onClick={(e) => setStates({ type: "ready" })}
        className="start px-5 py-4 mt-4"
      >
        Let's start
      </button>
    </div>
  );
}
