import { ContentDayType } from '../../types/types';
import { useContext } from 'react';
import Event from './Event';
import { DayType } from '../../types/enums.d';
import { NavContext } from '../../context/NavContext';

const Day = ({ data }: { data: ContentDayType }) => {

  const { setDayNav } = useContext(NavContext);

  const setDay = () => {
    setDayNav(data.day);
  }

  return (
    <section className='w-full min-h-min xl:h-screen flex flex-col justify-center items-center' onMouseOver={setDay} onPointerEnter={setDay}>
      <div className='min-w-[90%] max-w-[90%] lg:min-w-[80%] lg:max-w-[80%] xl:min-w-[70%] xl:max-w-[70%] 2xl:min-w-[50%] 2xl:max-w-[50%] h-auto flex flex-col p-3'>
        <div className='w-auto h-auto flex flex-col items-center'>
          <h2 className='text-3xl lg:text-5xl xl:text-8xl font-josefin font-bold flex-auto'>{data.day}</h2>
          <h2 className='text-base lg:text-xl xl:text-2xl font-josefin font-medium underline underline-offset-4 decoration-1 xl:-mt-5 -mt-2 tracking-wide'>{data.dayWeek}</h2>
          {
            data.typeDay === DayType.PREFIESTA && (
              <div className='w-full'>
                <h3 className='text-base lg:text-lg xl:text-xl font-josefinLight mt-2 w-full text-center'>{data.typeDay}</h3>
              </div>
            )
          }
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