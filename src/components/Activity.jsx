import { useRef, useState } from "react";
import { SiActivitypub } from "react-icons/si";
import ActivityOverview from "./ActivityOverview";
import ActivityClasses from "./ActivityClasses";
import ActivityExps from "./ActivityExps";
import { motion, useInView } from "framer-motion";

function Activity() {
  const [underline, setUnderline] = useState(0);
  const item = ["Tổng quan", "Lớp học", "Trải nghiệm"]

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const handleUnderline = (index) => {
    setUnderline(index)
  }

  return (
    <motion.div id="activity" ref={ref} className="w-full px-[4%] py-[40px]"
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2 border-[1px] border-black border-opacity-20 px-3 py-1 rounded-3xl">
          <SiActivitypub color="rgb(88 165 64)" size={30}/>
          <h1 className="text-[22px] font-extralight">Hoạt động</h1>
        </div>
        <div className="flex gap-10">
          {item.map((item, index) => (
            <button key={index} className={`text-[20px] ${underline === index ? "text-slate-800" : "text-slate-500"} ${underline === index ? "underline decoration-slate-800 decoration-2 underline-offset-[12px]": "underline decoration-zinc-400 decoration-2 underline-offset-[12px]"} transition-all duration-350 ease-linear`}
              onClick={() => handleUnderline(index)}
            >{item}</button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        {underline === 0 && <ActivityOverview />}
        {underline === 1 && <ActivityClasses />}
        {underline === 2 && <ActivityExps />}
      </div>
    </motion.div>
  );
}

export default Activity;