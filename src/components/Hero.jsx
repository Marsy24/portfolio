import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto sm:mt-0 mt-5`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Привет, я <span className='text-[#915EFF]'>Marsy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Я разрабатываю пользовательские <br className='sm:block hidden' />
            интерфейсы и веб приложения
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute sm:bottom-10 bottom-20 w-full flex justify-center items-center">

        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative">
          <a className="absolute top-0 left-0 w-full h-full" href="#about"></a>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;