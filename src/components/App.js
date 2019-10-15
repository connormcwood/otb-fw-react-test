import React from 'react';
import FilterManager from './FilterManager';
import HotelManager from './HotelManager'
import './app.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="flex-fourth">
          <FilterManager />
        </div>
        <div className="flex-three-fourth">
          <HotelManager />
        </div>
      </div>
    </div>
  );
}

export default App;
