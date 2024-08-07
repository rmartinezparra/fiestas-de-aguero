import { ContentEventType } from '../../types/types';

const Event = ({ data }: { data: ContentEventType }) => {

  return (
    <div className=''>
      <h3>{data.time}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Event;