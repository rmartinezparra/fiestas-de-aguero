import { useEffect } from 'react';
import LayoutMain from './layouts/LayoutMain';
import Router from './components/Router/Router';
import { useNavigate } from 'react-router-dom';
import './App.css'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/2024');
  });

  return (
    <LayoutMain>
      <Router />
    </LayoutMain>
  )
}

export default App
