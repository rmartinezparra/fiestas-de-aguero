import { ReactElement, useState } from 'react';
import { ContentDayType } from '../../../types/types';
import data from '../../../data/2024.json';
import Day from '../../Days/Day';
import ParticlesBackground from '../../particles/ParticlesBackground';

//Particles options
import LinksV2 from '../../particles/options/LinksV2';

const Year2024 = (): ReactElement => {
  const [content] = useState<ContentDayType[]>(data);

  return (
    <div className='flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600'>
      <ParticlesBackground options={LinksV2} />
      <div className='z-10 text-white'>
        {
          content.map((day, index) => (
            <div key={index}>
              <Day data={day} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Year2024;