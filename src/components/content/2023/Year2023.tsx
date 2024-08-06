import { ReactElement, useState } from 'react';
import { ContentDayType } from '../../../types/types';
import data from '../../../data/2023.json';

const Year2023 = (): ReactElement => {
  const [content] = useState<ContentDayType[]>(data);

  return (
    <div className='h-full w-full'>
      {
        content.map((day, index) => (
          <div key={index}>
            <h2>{day.day} - {day.dayWeek}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default Year2023;