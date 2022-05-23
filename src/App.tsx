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
      <h2>About Me</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p style={{ textAlign: 'left', width: '50%', display: 'block' }}>
          Hi! 👋 Welcome to my portfolio, let me tell you a little bit about myself. 
          I've been a programmer since grade school, I began with GW Basic and an IBM PC compatable. 
          My first program generated Dungeons &#38; Dragons character sheets. 
          From there I moved on to Visual Basic, then to Javascript, Perl, PHP, and now NodeJS. 
          My current focus has been on building React apps that use a significant amount of bespoke backend resources.
        </p>
        <p style={{ textAlign: 'left', width: '50%', display: 'block' }}>
          My passion for coding and engineering grows with every project, and one of my favorite activities is paired programming.
          I firmly believe that a good engineer learns from their team as much as they contribute.
        </p> 
      </div>

      <h2>Projects</h2>
      {/* Projects */}
      {/* Periodic Table of Elements */}

      <div style={{ textAlign: 'center' }}>
        {/* <h3><u>Periodic Table of Elements</u></h3> */}
        {/* <PeriodicTable /> */}
        
        <iframe width="1400px" height={800} src="https://lagslug.github.io/PeriodicTable-React/"></iframe>
        <div>
          <p>Github: <a href="https://github.com/LagSlug/PeriodicTable-React">https://github.com/LagSlug/PeriodicTable-React</a></p>
          <p>Demo: <a href="https://lagslug.github.io/PeriodicTable-React/">https://lagslug.github.io/PeriodicTable-React/</a></p>
          <p>NPM: <a href="https://www.npmjs.com/package/@celadora/periodic-table">https://www.npmjs.com/package/@celadora/periodic-table</a></p>
        </div>
      </div>

      {/* URL Shortener */}
      <div style={{ textAlign: 'center' }}>
        <iframe width="1400px" height={250} src="https://www.shrt.lol"></iframe>
        <div>
          <p>Github: <a href="https://github.com/LagSlug/URL-Shortener">https://github.com/LagSlug/URL-Shortener</a></p>
          <p>Demo: <a href="https://www.shrt.lol">shrt.lol</a></p>
        </div>
      </div>

      {/* Weekly Time Scheduler */}
      <div style={{ textAlign: 'center' }}>
        <iframe width="1400px" height={500} src="https://lagslug.github.io/Weekly-Time-Scheduler/"></iframe>
        <div>
          <p>Github: <a href="https://github.com/LagSlug/Weekly-Time-Scheduler">https://github.com/LagSlug/Weekly-Time-Scheduler</a></p>
          <p>Demo: <a href="https://lagslug.github.io/Weekly-Time-Scheduler/">https://lagslug.github.io/Weekly-Time-Scheduler/</a></p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ height: 100 }}></div>
    </div>
  );
}

export default App;
