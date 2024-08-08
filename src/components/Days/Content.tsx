import { ContentDayType } from '../../types/types';
import Day from './Day';

const Content = ({ data }: { data: ContentDayType[] }) => {
  return (
    <div className='z-10 text-white md:space-y-2'>
      {
        data.map((day, index) => (
          <div key={index}>
            <Day data={day} />
          </div>
        ))
      }
    </div>
  );
};

export default Content;