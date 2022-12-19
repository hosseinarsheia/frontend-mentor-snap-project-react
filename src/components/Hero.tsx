import heroImageMobile from '../assets/images/image-hero-mobile.png';
import heroImageDestktop from '../assets/images/image-hero-desktop.png';
import databizImage from '../assets/images/client-databiz.svg';
import audiophile from '../assets/images/client-audiophile.svg';
import meet from '../assets/images/client-meet.svg';
import maker from '../assets/images/client-maker.svg';

const Hero = () => {
  return (
    <div className='flex flex-col-reverse max-w-5xl mb-8 md:flex-row md:mt-12 md:space-x-4 '>
      <div className='relative px-4 mt-10 text-center md:text-left'>
        <h1 className='text-4xl font-bold md:hidden'>Make remote work</h1>
        <h1 className='hidden text-6xl font-bold md:block'>
          Make <br /> remote work
        </h1>
        <p className='w-full max-w-md mx-auto mt-4 text-my_gray '>
          Get your team in sync, no matter your location. Streamline processes, create
          team rituals, and watch productivity soar.
        </p>

        <a
          href='#/'
          className='inline-block px-6 py-3 mt-6 text-white bg-black md:mt-10 rounded-2xl md:mb-24'>
          Learn more
        </a>

        <div className='bottom-0 left-0 right-0 flex flex-row items-center justify-around mt-10 md:absolute '>
          <img src={databizImage} className='w-16 h-4 ' alt='databizImage' />
          <img src={audiophile} className='w-12 h-6 ' alt='audiophile' />
          <img src={meet} className='h-4 w-14 ' alt='audiophile' />
          <img src={maker} className='w-16 h-5 ' alt='audiophile' />
        </div>
      </div>
      <img
        src={heroImageMobile}
        className='object-contain min-w-full mt-8 h-80 md:hidden'
        alt='closeIcon'
      />
      <img
        src={heroImageDestktop}
        className='hidden flex-1 h-96 md:block lg:h-[450px] object-contain'
        alt='closeIcon'
      />
    </div>
  );
};

export default Hero;
