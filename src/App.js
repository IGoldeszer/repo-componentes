import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import Welcome from './components/Welcome';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome name=""/>
      <Body>
        <Card props/>
      </Body>
    </div>
  );
}

export default App;
