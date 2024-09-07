import React from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const CardContent = (
    <ReactParallaxTilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        {source_code_link && (
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="30" height="30" version="1.0" viewBox="0 0 50 50">
                <path fill='white' d="M17.7 7.6c-.4.4-.7 6.3-.7 13.2v12.4L13.4 30c-3.8-3.3-6-3.6-7.8-.8-.9 1.5 0 2.9 5.9 8.9 8.8 8.9 10.8 9.9 19 9.9 6 0 6.9-.3 9.6-3 2.9-2.9 3-3 2.7-12.7-.3-9-.5-9.8-2.3-9.8-1.4 0-2.1.8-2.3 2.7-.5 4.1-2 3.4-2.4-1-.2-2.9-.7-3.7-2.3-3.7-1.4 0-2.1.8-2.3 2.7-.5 3.8-2 3.5-2.4-.5-.2-2.4-.8-3.2-2.3-3.2-1.5 0-2.1.8-2.3 3.2-.7 6.7-2.1 3-2.4-5.9-.2-7.4-.6-9.3-1.8-9.6-.9-.1-1.9 0-2.3.4z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </ReactParallaxTilt>
  );

  return source_code_link ? (
    <a href={source_code_link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    <div>{CardContent}</div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Работа</p>
        <h2 className={`${styles.sectionHeadText}`}>Проекты.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Следующие проекты демонстрируют мои навыки и опыт. 
          Каждый проект кратко описан со ссылками, или без, на репозитории кода или DEMO-сайт.
          Блок отражает мою способность решать проблемы бизнеса, работать с различными технологиями и эффективно управлять проектами.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");