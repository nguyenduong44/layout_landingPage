import { motion, useInView } from "framer-motion";
import banner from "../img/banner.jpg";
import { useRef } from "react";

function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  return (
    <motion.div ref={ref} className="px-[4%]"
      style={{
        scale: isInView ? 1 : 0.7,
        transition: "all ease-out 0.2s"
      }}
    >
      <img src={banner} alt="banner" className="rounded-2xl"/>
    </motion.div>
  );
}

export default Banner;