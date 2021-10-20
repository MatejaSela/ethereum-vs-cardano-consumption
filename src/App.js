import EthereumChart from './components/EthereumChart/EthereumChart';
import MyProvider from './components/Provider/Provider'
import BarChart from './components/BarChart/BarChart'
import React, {useState} from 'react';
import './index.css';
import './components/Provider/Provider'

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30]
]
var i = 0;

const App = () => {

    const TP = 3083;
    const RPP = 3;
    
    const MS = 265; // src: https://outervision.com/power-supply-calculator
    const numberOfHoursPerYear = 8760;
    const UpConstant = 0.1;

    const totalPerYearSingleNode = MS*numberOfHoursPerYear;
    const totalPerYearkWhSingleNode = MS*numberOfHoursPerYear/1000;

    const finalCalculationkWh = TP*RPP*MS + TP*RPP*MS * 0.1;
    const finalCalculationMWh = (TP*RPP*MS + TP*RPP*MS * 0.1)/1000;

    const handleLoadedData = (maxValEth) => {
      setMaxEth(maxValEth);
    }

    const [maxEth, setMaxEth] = useState(null);

    // Geocentric centers of power (?)
    // Supporting the next generation of artists - they need a planet to live on (...)
    
    // Artano is global, ethical, and sustainable. What do we mean by sustainable...
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

        {/* TODO */}
        {/* load the data only once */}
        {/* get the data from the ETH chart for the latest consumption data */}
        {/* Create a bar chart with this data, also pass the Cardano consumption, and Visa consumption */}
        {/* Make a chart where you can compare all 3 maybe? Maybe not idk... */}

        {/* <MyProvider> */}
          <EthereumChart onLoadData={handleLoadedData}/>
        {/* </MyProvider> */}

        
        
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

      <h2 className="formula">Now for the formula we used [this is according to our best estimates at this time]: </h2>
      <br/>
      <p className="formula">We take the total number of pools (Total Pools = TP = {TP})</p>
      <p className="formula">Assume the average number of relays is 3 per pool (Relays Per Pool = RPP = {RPP})</p>
      <p className="formula">The minimum system requirements are 8GB, 2 cores, 2GHz at the moment (Minimum Specs Consumption = MS = {MS}W)</p>
      <p className="formula">Total consumption per year is MS * Number of hours per year (8760h) = {totalPerYearSingleNode} Wh = {totalPerYearkWhSingleNode} kWh</p>
      <p className="formula">Up the minimum requirements by 10%, as most relays run on more powerful machines (Up Constant = {UpConstant*100}%)</p>

      <br/>
      <p className="formula"> Therefore the total Cardano consumption = TP*RPP*MS + TP*RPP*MS * 10% = {finalCalculationkWh} kWh</p> 
      <p className="formula"> {finalCalculationkWh}kWh is equivalent to {finalCalculationMWh}MWh</p> 

      <p className="textfield"> Cardano is currently {(maxEth/finalCalculationMWh).toPrecision(6)} times more energy efficient than Ethereum.
      Here is a chart comparing the energy consumption of Ethereum and Cardano per year side by side:</p>
      <BarChart totEthereum={maxEth} totCardano={finalCalculationMWh}/>
      <p className="textfield"> There's no error on this graph, the Cardano energy consumption doesn't even appear, so let's crank it up to 10,000 transactions.</p>
      <p className="textfield"> To conclude, Cardano's proof of stake algorithm is tens of thousands of times more energy efficient than Ethereum, which uses a proof of work algorithm. </p>
      </div>
    );
  }
export default App;
