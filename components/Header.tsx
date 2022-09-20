import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='max-w-7xl mx-auto sticky top-0 flex items-start justify-between z-20 p-5'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'
      >
        {/* Social Icons */}
        <SocialIcon
          url='https://youtube.com'
          target='_blank'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitter.com'
          target='_blank'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://instagram.com'
          target='_blank'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com'
          target='_blank'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='hidden md:inline-flex text-sm text-gray-400 uppercase'>
          Get In Touch!
        </p>
      </motion.div>
    </header>
  );
}
