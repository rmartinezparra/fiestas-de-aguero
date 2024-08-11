import { Routes, Route, Navigate } from 'react-router-dom';
import Year2024 from '../content/2024/Year2024';
import Year2023 from '../content/2023/Year2023';
import Navbar from '../Navbar/Navbar';
import { NavContextProvider } from '../../provider/NavContextProvider';
import Footer from '../Footer/Footer';

const Router = () => {

  return (
    <NavContextProvider>
      <div className='w-full h-full overflow-y-hidden no-scrollbar bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/2024' />} />
          <Route path='/2024' element={<Year2024 />} />
          <Route path='/2023' element={<Year2023 />} />
        </Routes>
        <Footer />
      </div >
    </NavContextProvider>
  );
}

export default Router;