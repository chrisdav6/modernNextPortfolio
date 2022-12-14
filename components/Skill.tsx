import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Skill as SkillType } from '../typings';

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className='rounded-full border border-gray-500 objext-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
