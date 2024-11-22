import { useRef } from "react";
import scroll1 from "../img/scroll1.jpg"
import scroll2 from "../img/scroll2.jpg"
import scroll3 from "../img/scroll3.jpg"
import { motion, useInView } from "framer-motion";

function Info() {

  const ref = useRef(null);

 const isInView = useInView(ref, { 
    once: true,
    margin: "500px" 
});

  const sections = [
    {
      content: <p className="sticky top-0"><strong>Auftdart - School of Gifted Education</strong> tự hào là đơn vị tiên phong tại Việt Nam, kết hợp giữa hình thức học Acellus Online với học kèm bổ trợ nâng cao kiến thức hoàn toàn bằng tiếng Anh trực tiếp tại trường; được xây dựng trên nền tảng vững chắc từ Auftdart Group và các tổ chức thành viên gồm: Auftdart - Academy of Music and Performing Arts, với gần 12 năm kinh nghiệm trong giáo dục âm nhạc và nghệ thuật biểu diễn; Auftdart - Art Avenue, chuyên giáo dục hội họa; và Enlightening Education Center, trung tâm hàng đầu cung cấp các chương trình học thuật phổ thông quốc tế từ Hoa Kỳ.</p>,
      image: scroll1
    },
    {
      content: <p className="sticky top-0">Auftdart có đội ngũ Giảng viên bản ngữ dày dặn kinh nghiệm với bằng cấp Sư phạm liên quan đến lĩnh vực giảng dạy giúp trẻ nâng cao khả năng giao tiếp 100% bằng tiếng Anh xuyên suốt quá trình học.</p>,
      image: scroll2
    },
    {
      content: <p className="sticky top-0">
        Với hệ thống đào tạo chuyên sâu, nghiên cứu và phát triển bởi Viện Khoa học và Công nghệ Quốc tế của Acellus Academy, Auftdart - School of Gifted Education mang đến những chương trình giúp trẻ khám phá và phát triển toàn diện:
        <ul className="list-disc mt-4">
          <li className="mb-2">
            <strong>Chương trình Acellus Scholar (AS)</strong>, bao gồm: Hệ phổ thông Mỹ Acellus kết hợp cùng các môn học Âm nhạc, Hội họa, Kịch nghệ, Giáo dục thể chất và Phát triển tư duy đa chiều.
          </li>
          <li>
            <strong>Chương trình Advanced Acellus (AA)</strong> hướng đến tấm bằng tốt nghiệp phổ thông trung học Mỹ.
          </li>
        </ul>
      </p>,
      image: scroll3
    },
  ]

  return (
    <div id="about" ref={ref} className="w-full py-10" 
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }}
    >
      <h1 className="text-[40px] font-bold text-center">Auftdart</h1>
      <h2 className="text-[32px] font-semibold text-center mb-12">School of Gifted Education Growing Tomorrow’s Global Citizens</h2>

      {sections.map((section, index) => {
        return (
          <div key={index} className="flex gap-10 text-[22px] px-8 mb-16 items-start"
          >
            {section.content}
            <img src={section.image} alt="index" className="w-[44%] rounded-3xl"/>
          </div>
        )
      })}
    </div>
  );
}

export default Info;