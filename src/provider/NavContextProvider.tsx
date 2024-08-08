import { ReactNode } from 'react';
import { NavContext } from '../context/NavContext';
import useNavContext from '../hooks/useNavContext';

export const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const { yearNav, setYearNav, dayNav, setDayNav } = useNavContext();

  return (
    <NavContext.Provider value={{ yearNav, setYearNav, dayNav, setDayNav }}>
      {children}
    </NavContext.Provider>
  );
};