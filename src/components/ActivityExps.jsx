import { motion, AnimatePresence } from "framer-motion";
import slide from "../img/class1.jpg"

function ActivityExps() {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-full"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration:  0.8}}
      >
        <h1 className="text-[35px] font-bold mb-14">Giới thiệu về các hoạt động chính</h1>
        <div class="grid grid-cols-2 gap-4 p-8 bg-gray-100">
          <div className="bg-green-200 rounded-lg p-6 flex flex-col justify-between">
            <div className="text-2xl font-bold">Thử nghiệm
              máy lọc nước mini
            </div>
          </div>
          <div className="bg-purple-200 rounded-lg p-6 row-span-8 flex  flex-col justify-between">
            <img src={slide} alt="sd" />
          </div>
          <div className="bg-gray-800 text-white rounded-lg row-span-8 p-6 flex items-center justify-center">
            <img src={slide} alt="sd" />
          </div>
          <div className="bg-orange-200 rounded-lg p-6 flex flex-col justify-between">
            <p className="text-2xl font-bold">Khám phá bí ẩn phía sau kính hiển vi</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 p-8 bg-gray-100">
          <div className="bg-green-200 rounded-lg p-6 flex flex-col justify-between">
            <div className="text-2xl font-bold">Tạo hình sáng tạo với đất sét
            </div>
          </div>
          <div className="bg-purple-200 rounded-lg p-6 row-span-8 flex  flex-col justify-between">
            <img src={slide} alt="sd" />
          </div>
          <div className="bg-gray-800 text-white rounded-lg row-span-8 p-6 flex items-center justify-center">
            <img src={slide} alt="sd" />
          </div>
          <div className="bg-orange-200 rounded-lg p-6 flex flex-col justify-between">
            <p className="text-2xl font-bold">Vui chơi tự do với Sách tương tác, Lego, board games</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ActivityExps;