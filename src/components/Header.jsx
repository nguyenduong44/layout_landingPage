import { motion, useInView } from "framer-motion";
import logo from "../img/logo.png";
import { useRef } from "react";

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.header ref={ref} className="w-full pb-3 pt-2 flex justify-between items-center"
    style={{
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
    }}
    >
      <div>
        <img src={logo} alt="logo"
          className="h-16 object-contain"
        />
      </div>
      <div className="flex gap-14 text-[19px] font-medium ">
        <a href="#activity">Hoạt động</a>
        <a href="#agenda">Agenda</a>
        <a href="#preferential">Ưu đãi</a>
        <a href="#about">Thông tin</a>
      </div>
      <div className="text-[18px] font-medium text-white flex justify-center items-center">
        <a href="register" className="w-full h-full px-5 py-3 bg-black rounded-3xl">Đăng ký</a>
      </div>
    </motion.header>
  );
}

export default Header;