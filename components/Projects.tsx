import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col md:flex-row max-w-full relative h-screen text-left justify-evenly items-center mx-auto z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src='/images/netflixClone.jpg'
              alt='Project Image'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]'>
                  Case Study {idx + 1} of {projects.length}:
                </span>{' '}
                Netflix Clone
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum tenetur quo iure ea vel, dignissimos iusto recusandae
                cumque tempora necessitatibus! Nihil, voluptate doloremque
                consequatur vitae modi praesentium quisquam beatae, sapiente
                iure, aspernatur fugiat autem dolor dicta numquam libero atque
                ratione ut. Quibusdam alias voluptate nobis laboriosam quod
                totam id sapiente.
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
