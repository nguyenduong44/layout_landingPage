import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Agenda() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <div id="agenda" ref={ref} className="w-full py-10"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      <div className="mx-[20%]">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Lịch Trình Hoạt Động
        </h1>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-200 table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-6 text-left text-[18px]">Thời gian</th>
                <th className="py-3 px-6 text-left text-[18px]">Hoạt động</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Row 1 */}
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-[18px]">8:30 - 9:00  /  13:30 - 14:00</td>
                <td className="py-4 px-6 text-[18px]">Đón Phụ huynh và Học sinh</td>
              </tr>
              {/* Row 2 */}
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-4 px-6 text-[18px]">9:30 - 11:30  /  14:30 - 16:30</td>
                <td className="py-4 px-6 text-[18px]">
                  LỚP HỌC TRẢI NGHIỆM tài nguyên Đất và Nước <br />
                  <span className="text-sm text-gray-500 text-[16px]">
                    Mỗi lớp học diễn ra trong vòng 30 phút. <br />
                    Buổi sáng: 9:30 | 10:10 | 10:50 <br />
                    Buổi chiều: 14:30 | 15:10 | 15:50
                  </span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-[18px]">9:00 - 12:00 / 14:00 - 17:00</td>
                <td className="py-4 px-6 text-[18px]">CÁC TRẢI NGHIỆM KHOA HỌC VÀ SÁNG TẠO</td>
              </tr>
              {/* Row 4 */}
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-4 px-6 text-[18px]">11:30 - 12:00 / 16:30 - 17:00</td>
                <td className="py-4 px-6 text-[18px]">Trò chuyện cùng Quản Lý Trường, và Giáo viên</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Agenda;