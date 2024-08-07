import { ContentDayType } from '../../types/types';
import Event from './Event';

const Day = ({ data }: { data: ContentDayType }) => {

  return (
    <section className='w-full min-h-min xl:h-screen flex flex-col justify-center items-center font-josefinRegular'>
      <div className='w-auto max-w-[90%] h-auto flex flex-col p-3'>
        <div className='w-auto h-auto flex flex-col items-center'>
          <h2 className='text-5xl xl:text-8xl font-bold font-gupterBold flex-auto'>{data.day}</h2>
          <h2 className='text-xl xl:text-2xl font-gupterMedium underline underline-offset-4 decoration-1 xl:-mt-5 -mt-2 tracking-wide'>{data.dayWeek}</h2>
        </div>
        <div className='xl:mt-7'>
          {
            data.events.map((event, index) => (
              <Event data={event} key={index} />
            ))
          }
        </div>
      </div>
    </section >
  );
};

export default Day;