import React, { Component } from 'react';
import './styles/index.css';
import Tiles from './Tiles/Tiles';

import MOCK_DATA from './mockdata';

class App extends Component {
   render() {
      return (
         <Tiles model={MOCK_DATA} brand="Tiles"/>
      );
   }
}

export default App;
