export default function Finish({ questions, points, setStates }) {
  return (
    <div
      className="d-flex mt-5 flex-column mx-auto justify-content-center align-items-center gap-5 px-3"
      style={{ maxWidth: "500px" }}
    >
      <p
        className="px-5 col-12 text-center"
        style={{
          borderRadius: "100px",
          fontSize: "22px",
          backgroundColor: "#61dafbad",
          fontWeight: "500",
          padding: "25px 0px",
        }}
      >
        You scored <b>{points}</b> out of{" "}
        <b>
          {questions
            .slice()
            .map((q) => q.points)
            .reduce((acc, cur) => acc + cur)}
        </b>{" "}
        (
        {Math.ceil(
          (points /
            questions
              .slice()
              .map((q) => q.points)
              .reduce((acc, cur) => acc + cur)) *
            100
        )}
        %)
      </p>
      <button
        onClick={(e) => setStates({ type: "restart" })}
        className="next px-5 py-4"
      >
        Restart quiz
      </button>
    </div>
  );
}
