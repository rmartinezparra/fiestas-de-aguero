import { ContentDayType } from '../../types/types';
import Event from './Event';

const Day = ({ data }: { data: ContentDayType }) => {

  return (
    <section className='w-full min-h-min xl:h-screen flex flex-col justify-center items-center font-gupterRegular'>
      <div className='w-auto h-auto border border-solid border-red-600 flex flex-col'>
        <div className='w-auto h-auto flex flex-col'>
          <h2 className='text-dayNum font-gupterBold'>{data.day}</h2>
          <h2 className='text-3xl font-gupterMedium underline underline-offset-4 decoration-1'>{data.dayWeek}</h2>
        </div>
        {
          data.events.map((event, index) => (
            <Event data={event} key={index} />
          ))
        }
      </div>
    </section >
  );
};

export default Day;