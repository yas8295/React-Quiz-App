function reload() {
  window.location.reload();
}

export default function Error() {
  return (
    <div className="d-flex p-2 text-center mt-5 flex-column justify-content-center align-items-center">
      <span className="loader error mt-5 mb-5">!</span>
      <h1
        style={{
          fontFamily: "Codystar",
          letterSpacing: "3px",
          fontSize: "20px",
          color: "red",
        }}
      >
        Somthing went wrong ! . . .
      </h1>
      <button onClick={(e) => reload()} className="next px-5 py-4 mt-5">
        Reload Page
      </button>
    </div>
  );
}
