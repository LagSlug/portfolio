import React from 'react';
import logo from './logo.svg';
import './App.scss';
import PeriodicTable from '@celadora/periodic-table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="name">Robert Rooney</span>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p>Periodic Table of Elements</p>
          <PeriodicTable />
          <div>
            <p>Github: <a href="https://github.com/LagSlug/PeriodicTable-React">https://github.com/LagSlug/PeriodicTable-React</a></p>
            <p>Demo: <a href="https://lagslug.github.io/PeriodicTable-React/">https://lagslug.github.io/PeriodicTable-React/</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
