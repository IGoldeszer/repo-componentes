import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';

function App() {
  return (
    <>      
      <Navbar />
      
      <ItemDetailContainer />
      
      <Body>
        <Item props/>
      </Body>
    
    </>
  );
}

export default App;