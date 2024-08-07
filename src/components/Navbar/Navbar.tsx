import { useState } from "react";

const Navbar = () => {
  const [year] = useState<number>(2024);

  return (
    <nav className='w-full h-auto bg-transparent fixed text-white z-10'>
      <ul className='flex flex-row p-3'>
        <div className='flex-1'>
          <li>{year}</li>
        </div>
        <div className='flex-1'>
          <li>Fiestas de Agüero {year}</li>
        </div>
        <div className='flex-1'>Día 15 de Agosto</div>
      </ul>
    </nav>
  );
}

export default Navbar;