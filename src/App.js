import React from 'react';
import logo from './logo.svg';
import './App.css';
import {calculateMB} from './assets/js/m&b'

import Mass from './assets/components/mass';
import Nav from './assets/components/nav';
import Performance from './assets/components/perf';
import About from './assets/components/about';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
        <Mass></Mass>
        <Performance></Performance>
        <About></About>
    </div>
  );
}

export default App;
