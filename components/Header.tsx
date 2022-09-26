import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target='_blank'
            fgColor='gray'
            bgColor='transparent'
            className='duration-500 hover:scale-150'
          />
        ))}
      </motion.div>

      <Link href='#contact'>
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
            className='cursor-pointer duration-500 hover:scale-150'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='hidden md:inline-flex text-sm text-gray-400 uppercase cursor-pointer'>
            Get In Touch!
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
