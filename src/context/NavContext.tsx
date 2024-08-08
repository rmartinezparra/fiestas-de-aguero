import { createContext } from 'react';
import { NavContextType } from '../types/types';

export const NavContext = createContext<NavContextType>({
  yearNav: null,
  setYearNav: () => { },
  dayNav: null,
  setDayNav: () => { },
}); 