// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import GameDetails from './pages/GameDetails';
import { FavoriteProvider } from './context/FavoriteContext';
import { FilterProvider } from './context/FilterContext';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <FavoriteProvider>
       <FilterProvider>
          <Router>
            <Navbar /> 
            <div className="main-content">
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:gameId" element={<GameDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
          </div>

          </Router>
      </FilterProvider>
    </FavoriteProvider>
  );
};

export default App;
