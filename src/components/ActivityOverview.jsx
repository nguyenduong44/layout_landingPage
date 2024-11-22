import { motion, AnimatePresence } from "framer-motion";
import overview from "../img/overview_activity.jpg";
function ActivityOverview() {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-full flex gap-6 items-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration:  0.8}}
      >
        <div className="w-full">
          <h1 className="text-[35px] font-bold mb-14">Giới thiệu về các hoạt động chính</h1>
          <p className="text-[20px] mb-14">
          Ngày trải nghiệm Khoa Học Mỹ nằm trong chuỗi các ngày trải nghiệm tại Aufdart, giới  thiệu với Phụ huynh chương trình học các môn Toán, Khoa Học, Xã Hội, Ngữ Văn Mỹ bằng Tiếng Anh, giúp phụ huynh có thêm các lựa chọn giáo dục phù hợp cho con.
          </p>
          <h1 className="text-[23px] mb-5">
            Tham gia với ngày trải nghiệm Khoa Học, các em sẽ được:
          </h1>
          <ul className="text-[18px] list-disc">
            <li className="mb-3">
              Trải nghiệm lớp học thử môn Khoa Học Mỹ bằng Tiếng Anh với giảng viên nước ngoài nhiều kinh nghiệm, kết hợp giữa Tiếng Anh và Khoa Học theo chương trình tiêu chuẩn phổ thông Mỹ
            </li>
            <li className="mb-3">
              Khám phá bí ẩn hai nguyên tố quan trọng – Đất và Nước, qua các hoạt động khoa học với kính hiển vi, thực hành làm máy lọc nước và các hoạt động khác.
            </li>
            <li className="mb-3">
              Thỏa sức sáng tạo với các hoạt động thể chất, nghệ thuật, đọc sách, Lego…
            </li>
            <li className="mb-14">
              Thưởng thức tea-break và nhận những phần quà hấp dẫn
            </li>
          </ul>
          <a href="register" className=" text-white px-10 py-4 bg-black rounded-3xl text-[18px] font-medium float-right
          ">Đăng ký</a>
        </div>
        <img src={overview} alt="overview" className="w-[35%] rounded-3xl"/>
      </motion.div>
    </AnimatePresence>
  );
}

export default ActivityOverview;