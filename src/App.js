import EthereumChart from './container/EthereumChart/EthereumChart';
import React from 'react';
import './index.css';

function App() {
  return (
   
    <div>

      <h1 className="header"> Artano Presents: Ethereum vs. Cardano, the ultimate energy consumption breakdown </h1>

      <p className="textfield">
      The Artano team has decided to shed some light on the enormous energy consumption of the Ethereum blockchain, and how this compares
      to a more sustainable alternative: Cardano. </p>
      <br/>
      <br/>

      <p className="textfield"> The following graph presents the Ethereum electricity consumption in TWh. Ethereum is the major blockhain where
      most artists decide to mint their NFTs, which is relevant to a high-quality platform that is Artano</p>

      <EthereumChart />

      <p className="textfield"> As Ethereum uses a proof of work algorithm to execute its transacitons (which includes transactions
        when you buy or sell NFTs on an Ethereum platform, it requires enormous amounts of energy to execute a single transaction, which has accumulated to
        energy consumption of countries like Bangladesh, a top 40 consumer. </p>

      <h1 className="header">It doesn't have to be this way! </h1>


      <p className="textfield"> Cardano uses a proof of Stake of algorithm, a much more sustainable alternative to proof of work, which Bitcoin and Ethereum use.
      Since there is currently no data on the overall transaction of the Cardano blockchain, 
      we will take the minimum specs required to run a node (meaning a computer that is able to make transactions) </p>
      <br/>
      <p className="textfield"> We've used the minimum system requirements, meaning RAM, space and computing power required to successfully produce a block on Cardano. You can check these
    here[LINK]. </p>
    </div> 
  );
}

export default App;
