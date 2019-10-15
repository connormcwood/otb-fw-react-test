import React from 'react';
import FilterManager from './FilterManager';
import HotelsListing from './HotelsListing'
import './app.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="flex-fourth">
          <FilterManager />
        </div>
        <div className="flex-three-fourth">
          <HotelsListing />
        </div>
      </div>
    </div>
  );
}

export default App;
