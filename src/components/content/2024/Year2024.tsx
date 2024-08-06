import { ReactElement, useState } from 'react';
import { ContentDayType } from '../../../types/types';
import data from '../../../data/2024.json';
import Day from '../../Days/Day';

const Year2024 = (): ReactElement => {
  const [content] = useState<ContentDayType[]>(data);

  return (
    <div className='w-full h-full'>
      {
        content.map((day, index) => (
          <div key={index}>
            <Day data={day} />
          </div>
        ))
      }
    </div>
  );
};

export default Year2024;