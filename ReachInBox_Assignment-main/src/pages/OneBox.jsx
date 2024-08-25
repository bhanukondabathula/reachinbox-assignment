import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import MainPage from '../components/MainPage';
import RightSection from '../components/RightSection';
import AppBar from '../components/AppBar';

const OneBox = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`flex flex-col h-screen ${currentTheme}`}>
      <AppBar />
      <div className="flex-grow flex overflow-hidden">
        <SideBar />
        <MainPage />
        <RightSection />
      </div>
    </div>
  );
};

export default OneBox;
