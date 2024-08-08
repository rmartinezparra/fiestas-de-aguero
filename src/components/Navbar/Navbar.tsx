import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

const Navbar = () => {
  const { yearNav, dayNav } = useContext(NavContext);

  return (
    <nav className='w-full h-auto bg-transparent fixed text-white z-20 font-josefinMedium text-base lg:text-lg xl:text-xl backdrop-blur-sm'>
      <ul className='flex flex-row p-5'>
        <div className='flex-1 text-left'>
          <li>Fiestas en honor a San Roque {yearNav}</li>
        </div>
        <div className='flex-1 text-right'>
          <li>Día {dayNav} de Agosto</li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;