import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs'; 
import Benches from './pages/Shop Pages/Benches';
import Dumbbells from './pages/Shop Pages/Dumbbells';
import Kettlebells from './pages/Shop Pages/Kettlebells';
import Barbells from './pages/Shop Pages/Barbells';
import Plates from './pages/Shop Pages/Plates';
import CableMachines from './pages/Shop Pages/CableMachines';
import SmithMachines from './pages/Shop Pages/SmithMachines';
import LegMachines from './pages/Shop Pages/LegMachines';
import Treadmills from './pages/Shop Pages/Treadmills';
import Ellipticals from './pages/Shop Pages/Ellipticals';
import Bikes from './pages/Shop Pages/Bikes';
import Climbers from './pages/Shop Pages/Climbers';
import Rowers from './pages/Shop Pages/Rowers';
import Shoulder from './pages/Exercise Pages/Exercise Type Pages/shoulder';
import Leg from './pages/Exercise Pages/Exercise Type Pages/leg';
import Chest from './pages/Exercise Pages/Exercise Type Pages/chest';
import Back from './pages/Exercise Pages/Exercise Type Pages/back';
import Arm from './pages/Exercise Pages/Exercise Type Pages/arm';
import FatLoss from './pages/Learn Pages/Article Type Pages/fatloss';
import Nutrition from './pages/Learn Pages/Article Type Pages/nutrition';
import Supplements from './pages/Learn Pages/Article Type Pages/supplements';
import Training from './pages/Learn Pages/Article Type Pages/training';
import MuscleBuilding from './pages/Learn Pages/Article Type Pages/musclebuilding';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleSetActivePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar activePage={currentPage} setActivePage={handleSetActivePage} />
      <div className='content'>
        {currentPage === 'home' && <Home />}
        {currentPage === 'contact' && <ContactUs />}
        {currentPage === 'Benches' && <Benches />}
        {currentPage === 'Dumbbells' && <Dumbbells />}
        {currentPage === 'Kettlebells' && <Kettlebells />}
        {currentPage === 'Barbells' && <Barbells />}
        {currentPage === 'Plates' && <Plates />}
        {currentPage === 'Cable Machines' && <CableMachines />}
        {currentPage === 'Smith Machines' && <SmithMachines />}
        {currentPage === 'Leg Machines' && <LegMachines />}
        {currentPage === 'Treadmills' && <Treadmills />}
        {currentPage === 'Ellipticals' && <Ellipticals />}
        {currentPage === 'Bikes' && <Bikes />}
        {currentPage === 'Climbers' && <Climbers />}
        {currentPage === 'Rowers' && <Rowers />}
        {currentPage === 'Shoulder Exercises' && <Shoulder />}
        {currentPage === 'Leg Exercises' && <Leg />}
        {currentPage === 'Chest Exercises' && <Chest />}
        {currentPage === 'Back Exercises' && <Back />}
        {currentPage === 'Arm Exercises' && <Arm />}
        {currentPage === 'Fat Loss' && <FatLoss />}
        {currentPage === 'Nutrition' && <Nutrition />}
        {currentPage === 'Supplements' && <Supplements />}
        {currentPage === 'Training' && <Training />}
        {currentPage === 'Muscle Building' && <MuscleBuilding />}

      </div>
    </div>
  );
}

export default App;
