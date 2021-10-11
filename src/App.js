import EthereumChart from './container/EthereumChart/EthereumChart';
import React from 'react';
import TextField from './container/TextField/TextField';
import Header from './container/Header/Header';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <EthereumChart />
      <TextField />
    </div> 
  );
}

export default App;
