import { ReactElement } from 'react';
import github from '../../assets/github.svg';
import map from '../../assets/map.svg';

const Footer = (): ReactElement => {
  return (
    <div className='w-full flex flex-col items-center font-josefin p-3 bg-transparent'>
      <div className='flex flex-row w-auto h-auto place-items-center space-x-2 text-white z-10'>
        <a href='https://github.com/rmartinezparra/fiestas-de-aguero' target='_blank'>
          <img className='h-10 w-auto' src={github} alt="Proyecto publico de Github" />
        </a>
        <a href='https://maps.app.goo.gl/BwQZBFaz6MmKPi218' target='_blank'>
          <img className='h-10 w-auto' src={map} alt="Localización" />
        </a>
      </div>
      <p className='mt-2 font-normal text-sm lg:text-base xl:text-lg hover:underline cursor-pointer text-white z-10'>Powered by GitHub Pages</p>
    </div>
  );
};

export default Footer;