import { ContentEventType } from '../../types/types';

const Event = ({ data }: { data: ContentEventType }) => {

  return (
    <div className='flex flex-row space-x-6 h-auto w-auto p-3'>
      <p className='h-full xl:w-[60px] w-[40px] text-center place-content-center text-base lg:text-xl xl:text-xl font-josefinLight'>{data.time}</p>
      <p className='h-auto text-justify place-content-center text-base lg:text-xl xl:text-xl w-full font-josefinRegular'>{data.description}</p>
    </div>
  );
};

export default Event;