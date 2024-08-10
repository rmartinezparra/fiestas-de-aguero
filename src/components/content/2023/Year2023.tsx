import { ReactElement, useState, useEffect, useContext } from 'react';
import { ContentDayType } from '../../../types/types';
import data from '../../../data/2023.json';
import ParticlesBackground from '../../particles/ParticlesBackground';
import { Helmet } from 'react-helmet';
import Content from '../../Days/Content';
import Cover from '../../Days/Cover';
import { NavContext } from '../../../context/NavContext';

//Particles options
import LinksV2 from '../../particles/options/LinksV2';

const Year2023 = (): ReactElement => {
  const [content] = useState<ContentDayType[]>(data);
  const { setYearNav, setDayNav } = useContext(NavContext);

  useEffect(() => {
    setYearNav(2023);
    setDayNav(14);
  });

  return (
    <div className='flex flex-col'>
      <Helmet>
        <title>Fiestas de Agüero 2023</title>
        <meta name='Fiestas de Agüero 2023' content='2023' />
      </Helmet>
      <ParticlesBackground options={LinksV2} />
      <Cover day={14} />
      <Content data={content} />
    </div>
  );
};

export default Year2023;