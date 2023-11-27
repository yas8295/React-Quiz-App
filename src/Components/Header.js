export default function Header() {
  return (
    <div className="header p-sm-0 p-1 d-flex justify-content-center gap-sm-5 align-items-center flex-wrap">
      <img
        className="d-sm-block d-none "
        style={{ transition: "2s", opacity: 0, rotate: "360deg", scale: "0" }}
        src={require("../logo512.png")}
        alt=""
        width={"140px"}
      />
      <h1
        className="m-0 text-center"
        style={{
          fontFamily: "Codystar",
          fontSize: "55px",
          transition: "2s",
          scale: "0",
          opacity: 0,
        }}
      >
        The React Quiz
      </h1>
    </div>
  );
}
