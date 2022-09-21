import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src='/images/netflix.jpeg'
        alt='Netflix'
        className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Front End Dev</h4>
        <p className='font-bold text-2xl mt-1'>NetFlix</p>
        <div className='flex space-x-2 my-2'>
          <img
            src='/images/js.png'
            alt='JavaScript'
            className='h-10 w-10 rounded-full object-cover'
          />
          <img
            src='/images/js.png'
            alt='JavaScript'
            className='h-10 w-10 rounded-full object-cover'
          />
          <img
            src='/images/js.png'
            alt='JavaScript'
            className='h-10 w-10 rounded-full object-cover'
          />
          <img
            src='/images/js.png'
            alt='JavaScript'
            className='h-10 w-10 rounded-full object-cover'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work, Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}