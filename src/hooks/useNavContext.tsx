import { useState } from 'react';

const useNavContext = () => {

  const [yearNav, setYearNav] = useState<number | null>(null);
  const [dayNav, setDayNav] = useState<number | null>(null);

  return {
    yearNav,
    setYearNav,
    dayNav,
    setDayNav,
  };
};

export default useNavContext;