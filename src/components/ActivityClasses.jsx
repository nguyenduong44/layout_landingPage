import { motion, AnimatePresence } from "framer-motion";
import slide from "../img/class1.jpg";
import slide2 from "../img/banner.jpg"
import { useState } from "react";

function ActivityClasses() {
  const [isReversed, setIsReversed] = useState(false);

  const handleClick = () => {
    setIsReversed(!isReversed);
  };

  return (

    <AnimatePresence mode="wait">
      <motion.div className="w-full"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration:  0.8}}
      >
        <h1 className="text-[35px] font-bold ">Giới thiệu về các lớp học</h1>
        <div className="relative ml-[-7%] flex items-center justify-center h-screen overflow-hidden">
          {/* Div 1 */}
          <motion.div
            className="absolute mx-[10%] rounded-3xl overflow-hidden cursor-pointer"
            animate={{
              x: isReversed ? 150 : 0,
              zIndex: isReversed ? 1 : 10,
              scale: isReversed ? 0.9 : 1,
              opacity: isReversed ? 0.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={handleClick}
          >
            <img src={slide} alt="slide" className="rounded-3xl" />
            <div className="absolute top-0 left-0 w-[30%] h-full bg-black opacity-30 z-50"></div>
            <div className="absolute top-0 left-0 w-[30%] h-full z-50">
              <h1 className="text-[30px] text-slate-300 m-5">
                Lớp trải nghiệm Tài nguyên Đất
              </h1>
              <ul className="text-[20px] text-slate-300 m-8">
                <li className="mb-5">Khám phá bí mật của các loại Đất</li>
                <li>Tìm hiểu sự kỳ diệu của Đất với cây trồng</li>
              </ul>
            </div>
          </motion.div>
          {/* Div 2 */}
          <motion.div
            className="absolute mx-[10%] rounded-3xl overflow-hidden cursor-pointer"
            animate={{
              x: isReversed ? 0 : 150,
              zIndex: isReversed ? 10 : 1,
              scale: isReversed ? 1 : 0.9,
              opacity: isReversed ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={handleClick}
          >
            <img src={slide} alt="slide" className="rounded-3xl h-[100%] sepia" />
            <div className="absolute top-0 left-0 w-[30%] h-full bg-black opacity-30 z-50"></div>
            <div className="absolute top-0 left-0 w-[30%] h-full z-50">
              <h1 className="text-[30px] text-slate-300 m-5">
                Lớp trải nghiệm Tài nguyên Nước
              </h1>
              <ul className="text-[20px] text-slate-300 m-8">
                <li className="mb-5">Tìm hiểu vòng tuần hoàn của nước</li>
                <li>Hiểu cơ chế lọc nước, Hô biến từ nước dơ thành nước sạch</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ActivityClasses;