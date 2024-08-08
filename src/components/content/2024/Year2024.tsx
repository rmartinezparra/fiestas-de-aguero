import { ReactElement, useState, useEffect, useContext } from 'react';
import { ContentDayType } from '../../../types/types';
import data from '../../../data/2024.json';
import ParticlesBackground from '../../particles/ParticlesBackground';
import { Helmet } from 'react-helmet';
import Content from '../../Days/Content';
import Cover from '../../Days/Cover';
import { NavContext } from '../../../context/NavContext';

//Particles options
import LinksV2 from '../../particles/options/LinksV2';

const Year2024 = (): ReactElement => {
  const [content] = useState<ContentDayType[]>(data);
  const { setYearNav } = useContext(NavContext);

  useEffect(() => {
    setYearNav(2024);
  });

  return (
    <div className='flex flex-col'>
      <Helmet>
        <title>Fiestas de Agüero 2024</title>
        <meta name='Fiestas de Agüero 2024' content='2024' />
      </Helmet>
      <ParticlesBackground options={LinksV2} />
      <Cover day={13} />
      <Content data={content} />
    </div>
  );
};

export default Year2024;