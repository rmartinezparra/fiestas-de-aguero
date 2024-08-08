import { ReactElement } from 'react';
import escudo from '../../assets/escudo.svg';

const Cover = (): ReactElement => {
  return (
    <section className="w-full h-screen flex">
      <img className="w-3/4 lg:w-2/4 xl:w-1/4 m-auto drop-shadow-2xl" src={escudo} alt="Escudo de Agüero" />
    </section>
  );
};

export default Cover;