export default function Loading() {
  return (
    <div className="d-flex  mt-sm-5 mt-0 flex-column justify-content-center align-items-center">
      <span className="loader mt-5 mb-5"></span>
      <h1
        style={{
          fontFamily: "Codystar",
          letterSpacing: "3px",
          fontSize: "20px",
        }}
      >
        Loading . . .
      </h1>
    </div>
  );
}
