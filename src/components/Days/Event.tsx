import { ReactElement } from 'react';
import { ContentEventType } from '../../types/types';

const Event = ({ data }: { data: ContentEventType }): ReactElement => {

  return (
    <div className='border border-solid border-red-600'>
      <h3>{data.time}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Event;