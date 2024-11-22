import { TbCashOff } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


function Preferential() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <motion.div id="preferential" ref={ref} className="w-full py-10"
      style={{
        transform: isInView ? "none" : "translateX(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Các ưu đãi
      </h1>
      <div className="w-full flex justify-center gap-12">
        <div className="flex flex-col gap-3 justify-center items-center">
          <TbCashOff size={65} color={"rgb(88 165 64)"}/>
          <h1 className="text-[18px]">Tham gia ngày trải nghiệm hoàn toàn miễn phí</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <FaGraduationCap size={65} color={"rgb(88 165 64)"}/>
          <h1 className="text-[18px]">Rinh về thành phẩm khoa học và sáng tạo của chính mình</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <MdOutlineAttachMoney size={65} color={"rgb(88 165 64)"}/>
          <h1 className="text-[18px]">Đặc biệt, nhận ưu đãi 20% khi đăng ký khóa học</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Preferential;