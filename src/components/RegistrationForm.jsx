import React from "react";
import { motion } from "framer-motion";

function RegistrationForm() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">
        ĐĂNG KÝ NGÀY HỘI TRẢI NGHIỆM KHOA HỌC NGAY!
      </h1>
      <form className="space-y-6">
        {/* Họ và Tên Phụ Huynh */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Họ và tên Phụ huynh:
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Nhập họ và tên"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Nhập email"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Số điện thoại:
          </label>
          <input
            type="tel"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Nhập số điện thoại"
          />
        </div>

        {/* Tên bé */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Họ và tên Bé:
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Nhập họ và tên bé"
          />
        </div>

        {/* Bé hiện đang học lớp */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Bé hiện đang học lớp:
          </label>
          <div className="flex flex-wrap gap-4">
            {["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5"].map((grade) => (
              <label key={grade} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="grade"
                  value={grade}
                />
                {grade}
              </label>
            ))}
          </div>
        </div>

        {/* Bé đang học trường nào */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Bé đang học trường nào?
          </label>
          <div className="space-y-2">
            {[
              "Trường Công Lập, hệ tăng cường",
              "Trường Công Lập, hệ Tích Hợp",
              "Trường Tư",
            ].map((school) => (
              <label key={school} className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="school"
                  value={school}
                />
                {school}
              </label>
            ))}
          </div>
        </div>

        {/* Bé yêu thích môn học nào */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Bé yêu thích môn học nào (có thể chọn nhiều):
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              "Toán",
              "Khoa Học",
              "Xã Hội",
              "Ngữ Văn Anh",
              "Nghệ Thuật - Sáng Tạo - Âm nhạc",
              "Tất cả các môn trên",
            ].map((subject) => (
              <label key={subject} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="subjects"
                  value={subject}
                />
                {subject}
              </label>
            ))}
          </div>
        </div>

        {/* Phụ huynh biết đến ngày hội qua */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phụ huynh biết đến Ngày hội trải nghiệm qua:
          </label>
          <div className="space-y-2">
            {["Facebook", "Group cộng đồng", "Được người thân giới thiệu", "Khác"].map(
              (source) => (
                <label key={source} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="source"
                    value={source}
                  />
                  {source}
                </label>
              )
            )}
          </div>
        </div>

        {/* Phụ huynh tham gia buổi */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phụ huynh và Bé tham gia trải nghiệm:
          </label>
          <div className="space-y-2">
            {["Buổi sáng", "Buổi chiều"].map((session) => (
              <label key={session} className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="session"
                  value={session}
                />
                {session}
              </label>
            ))}
          </div>
        </div>

        {/* Đặt hẹn riêng */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phụ huynh có muốn đặt hẹn riêng với giảng viên/nhà trường để trao đổi không?
          </label>
          <div className="space-y-2">
            {["Có", "Không", "Chưa biết"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name="appointment"
                  value={option}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Các câu hỏi quan tâm */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Các câu hỏi/quan tâm (nếu có) về chương trình và nhà trường:
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Nhập câu hỏi của bạn"
          />
        </div>

        {/* Nút gửi */}
        <motion.button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-slate-900"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Gửi Đăng Ký
        </motion.button>
      </form>
    </motion.div>
  );
}

export default RegistrationForm;
