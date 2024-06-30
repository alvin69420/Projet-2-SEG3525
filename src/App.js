/* import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './index.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App; */

import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs'; 
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Initialize with 'home' as default

  const handleSetActivePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar activePage={currentPage} setActivePage={handleSetActivePage} />
      <div className='content'>
        {currentPage === 'home' && <Home />}
        {currentPage === 'contact' && <ContactUs />}
      </div>
    </div>
  );
}

export default App;
