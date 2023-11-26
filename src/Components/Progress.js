export default function Progress({ questions, progress, points, index }) {
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center gap-4 mb-5 mt-5 px-4"
      style={{ color: "rgba(255, 255, 255, 0.787)" }}
    >
      <div className="position-relative bar col-12">
        <div
          className="progress position-absolute"
          style={{ width: `${(progress / questions.length) * 100}%` }}
        ></div>
      </div>
      <div
        className="d-flex justify-content-between col-12"
        style={{ maxWidth: "490px" }}
      >
        <p className="m-0" style={{ fontSize: "16px", letterSpacing: "1px" }}>
          Question {index + 1} / {questions.length}
        </p>
        <p className="m-0" style={{ fontSize: "16px", letterSpacing: "1px" }}>
          {points} /{" "}
          {questions
            .slice()
            .map((q) => q.points)
            .reduce((acc, cur) => acc + cur)}
        </p>
      </div>
    </div>
  );
}
