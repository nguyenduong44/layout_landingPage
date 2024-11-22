import Banner from "./components/Banner";
import Header from "./components/Header";
import Activity from "./components/Activity";
import Agenda from "./components/Agenda";
import Preferential from "./components/Preferential";
import Info from "./components/Info";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import { useScroll, motion, useSpring } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-10">
        <Header />
        <Banner />
        <Activity />
        <Agenda />
        <Preferential />
        <Info />
        <RegistrationForm />
        <Footer />
      </div>
      <motion.div className="fixed left-0 right-0 h-[7px] bg-black bottom-0" 
        style={{scaleX}}
      ></motion.div>
    </div>
  );
}

export default App;
