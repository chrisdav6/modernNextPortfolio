import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:developer@mail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className='flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly items-center mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got what you need.{' '}
          <span className='underline decoration-[#f7ab0a]'>Lets Talk!</span>
        </h4>

        <div className='space-y-3'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+123456789</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>developer@mail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              type='text'
              className='contactInput'
              placeholder='Name'
            />
            <input
              {...register('email')}
              type='email'
              className='contactInput'
              placeholder='Email'
            />
          </div>
          <input
            {...register('subject')}
            type='text'
            className='contactInput'
            placeholder='Subject'
          />
          <textarea
            {...register('message')}
            className='contactInput'
            placeholder='Message'
          />
          <button
            type='submit'
            className='bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-lg hover:bg-[#ff9d00] transition duration-[1s]'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
