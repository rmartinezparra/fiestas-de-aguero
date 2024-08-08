import { Routes, Route, Navigate } from 'react-router-dom';
import Year2024 from '../content/2024/Year2024';
import Year2023 from '../content/2023/Year2023';

const Router = () => {

  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Navigate to='/2024' />} />
        <Route path='/2024' element={
          <div className='w-full h-full'>
            <Year2024 />
          </div>
        } />
        <Route path='/2023' element={<Year2023 />} />
      </Routes>
    </div >
  );
}

export default Router;