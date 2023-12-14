import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="header p-sm-0 p-1 d-flex justify-content-center gap-sm-5 align-items-center flex-wrap">
      <motion.img
        initial={{ scale: 0, opacity: 0, rotate: "360deg" }}
        animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
        transition={{ type: "spring", stiffness: 50 }}
        className="d-sm-block d-none "
        src={require("../logo512.png")}
        alt=""
        width={"140px"}
      />
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
        className="m-0 text-center"
        style={{
          fontFamily: "Codystar",
          fontSize: "55px",
        }}
      >
        The React Quiz
      </motion.h1>
    </div>
  );
}
