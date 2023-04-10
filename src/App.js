import React from 'react';
import Rewievs from './Reviews';
import './App.css';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our rewievs</h2>
          <div className='underline'></div>
        </div>
        <Rewievs />
      </section>
   </main>
  );
}

export default App;
