import { ContentDayType } from '../../types/types';
import Event from './Event';

const Day = ({ data }: { data: ContentDayType }) => {

  return (
    <section className='w-full min-h-min xl:h-screen flex flex-col justify-center items-center'>
      <div className='min-w-[90%] max-w-[90%] lg:min-w-[80%] lg:max-w-[80%] xl:min-w-[70%] xl:max-w-[70%] 2xl:min-w-[50%] 2xl:max-w-[50%] h-auto flex flex-col p-3'>
        <div className='w-auto h-auto flex flex-col items-center'>
          <h2 className='text-3xl lg:text-5xl xl:text-8xl font-bold font-josefinBold flex-auto'>{data.day}</h2>
          <h2 className='text-base lg:text-xl xl:text-2xl font-josefinMedium underline underline-offset-4 decoration-1 xl:-mt-5 -mt-2 tracking-wide'>{data.dayWeek}</h2>
        </div>
        <div className='mt-3 lg:mt-5 xl:mt-7'>
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