import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col md:flex-row max-w-full relative h-screen text-left justify-evenly items-center mx-auto z-0 '
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40'>
        {projects?.map((project, idx) => (
          <div
            key={project._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt='Project Image'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]'>
                  Case Study {idx + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ top: -10, opacity: 0 }}
        whileInView={{ top: 725, opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full absolute bg-[#f7ab0a]/10 left-0 h-[10px] -skew-y-12'
      />
      <motion.div
        initial={{ top: -10, opacity: 0 }}
        whileInView={{ top: 700, opacity: 1 }}
        transition={{ duration: 1.25 }}
        className='w-full absolute bg-[#f7ab0a]/10 left-0 h-[20px] -skew-y-12'
      />
      <motion.div
        initial={{ top: -10, opacity: 0 }}
        whileInView={{ top: 655, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='w-full absolute bg-[#f7ab0a]/10 left-0 h-[40px] -skew-y-12'
      />
      <motion.div
        initial={{ top: -10, opacity: 0 }}
        whileInView={{ top: 350, opacity: 1 }}
        transition={{ duration: 2 }}
        className='w-full absolute bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12'
      />
    </motion.div>
  );
}
