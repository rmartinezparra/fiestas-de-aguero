import { ReactElement, useState } from 'react';
import { ContentDayType } from '../../types/types';

const Day = ({ data }: { data: ContentDayType }): ReactElement => {
  const [day] = useState<ContentDayType>(data);

  return (
    <div className='w-full h-full'>
      <h2>{day.day} - {day.dayWeek}</h2>
    </div>
  );
};

export default Day;