import escudo from '../../assets/escudo.svg';
import { useContext } from 'react';
import { NavContext } from '../../context/NavContext';

const Cover = ({ day }: { day: number }) => {

  const { setDayNav } = useContext(NavContext);

  const setDay = () => {
    setDayNav(day);
  }

  return (
    <section className="w-full h-screen flex" onMouseOver={setDay} onPointerEnter={setDay}>
      <img className="w-3/4 lg:w-2/4 xl:w-1/4 m-auto drop-shadow-2xl" src={escudo} alt="Escudo de Agüero" />
    </section>
  );
};

export default Cover;