export default function Header() {
  return (
    <div className="p-sm-0 p-1 d-flex justify-content-center gap-sm-5 align-items-center flex-wrap">
      <img className="d-sm-block d-none " src={require("../logo512.png")} alt="" width={"140px"} />
      <h1
        className="m-0 text-center"
        style={{ fontFamily: "Codystar", fontSize: "55px" }}
      >
        The React Quiz
      </h1>
    </div>
  );
}
