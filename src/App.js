import EthereumChart from './container/EthereumChart/EthereumChart';
import React from 'react';
import './index.css';

function App() {
  const TP = 3083;
  const RPP = 3;
  
  const MS = 265; // src: https://outervision.com/power-supply-calculator
  const numberOfHoursPerYear = 8760;
  const UpConstant = 0.1;

  const totalPerYearSingleNode = MS*numberOfHoursPerYear;
  const totalPerYearkWhSingleNode = MS*numberOfHoursPerYear/1000;

  const finalCalculationkWh = TP*RPP*MS + TP*RPP*MS * 0.1;
  const finalCalculationMWh = (TP*RPP*MS + TP*RPP*MS * 0.1)/1000;

  const lastNumberEthereum = 77.26755054*1000000; // TODO pull from CSV

  return (
   
    <div>

      <h1 className="header"> Artano Presents: Ethereum vs. Cardano, the ultimate energy consumption breakdown </h1>

      <p className="textfield">
      The Artano team has decided to shed some light on the enormous energy consumption of the Ethereum blockchain, and how this compares
      to a more sustainable alternative: Cardano. </p>
      <br/>
      <br/>

      <p className="textfield"> The following graph presents the yearly Ethereum electricity consumption in TWh. Ethereum is THE blockhain where
      most artists decide to mint their NFTs, and we're here to show that there's a more sustainable alternative.</p>

      <EthereumChart />

      <p className="textfield"> As Ethereum uses a proof of work algorithm to execute its transacitons, it requires enormous amounts of energy to execute a single transaction, which has accumulated to
        energy consumption of countries like Bangladesh, a top 40 consumer on a yearly basis. </p>

      <h1 className="header">It doesn't have to be this way! </h1>


      <p className="textfield"> There are algorithms like proof of history or proof of stake that offer a more sustainable solution than Ethereum.
      Cardano uses a proof of Stake of algorithm.</p>
      <br/>

      <p className="textfield"> How sustainable is proof of stake though? Since there is currently no data on the overall transaction of the Cardano blockchain, 
      we will take the minimum specs required to run a node, meaning a computer that is able to make transactions on Cardano - a computer
      which can mint, sell and buy NFTs from any Cardano marketplace. </p>

      <br/>
      <p className="textfield"> We've used the minimum system requirements, meaning RAM, number of cores and CPU needed to successfully produce a block on Cardano. 
      You can check these <a href="https://github.com/input-output-hk/cardano-node/releases" target="_blank">here</a>. 
      
      </p>

    <h2 className="formula">Now for the formula we used: </h2>
    <br/>
    <p className="formula">We take the total number of pools (Total Pools = TP = {TP})</p>
    <p className="formula">Assume the average number of relays is 3 per pool (Relays Per Pool = RPP = {RPP})</p>
    <p className="formula">The minimum system requirements are 8GB, 2 cores, 2GHz at the moment (Minimum Specs Consumption = MS = {MS}W)</p>
    <p className="formula">Total consumption per year is MS * Number of hours per year (8760h) = {totalPerYearSingleNode} Wh = {totalPerYearkWhSingleNode} kWh</p>
    <p className="formula">Up the minimum requirements by 10%, as most relays run on more powerful machines (Up Constant = {UpConstant*100}%)</p>

    <br/>
    <p className="formula"> Therefore the total Cardano consumption = TP*RPP*MS + TP*RPP*MS * 10% = {finalCalculationkWh} kWh</p> 
    <p className="formula"> {finalCalculationkWh}kWh is equivalent to {finalCalculationMWh}MWh</p> 

    <p className="textfield"> Cardano is currently {(lastNumberEthereum/finalCalculationMWh).toPrecision(6)} times more energy efficient than Ethereum.
    Here is a chart comparing the energy consumption of Ethereum and Cardano side by side:</p>
    
    </div> 
  );
}

export default App;
