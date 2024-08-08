import { ReactElement, useState } from 'react';
import { ContentDayType } from '../../../types/types';
import data from '../../../data/2023.json';
import ParticlesBackground from '../../particles/ParticlesBackground';
import { Helmet } from 'react-helmet';
import Content from '../../Days/Content';
import LinksV2 from '../../particles/options/LinksV2';
import Cover from '../../Days/Cover';

const Year2023 = (): ReactElement => {
  const [content] = useState<ContentDayType[]>(data);

  return (
    <div className='flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600'>
      <Helmet>
        <title>Fiestas de Agüero 2023</title>
        <meta name='Fiestas de Agüero 2023' content='2023' />
      </Helmet>
      <ParticlesBackground options={LinksV2} />
      <Cover />
      <Content data={content} />
    </div>
  );
};

export default Year2023;