import logo from './logo.svg';
import './App.scss';
import Main from "./container/Main/Main";
import beersData from "./data/beers.js";
import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
function App() {
  const [searchTerm,setSearchTerm] = useState('');
  const [highAlcohol,setHighAlcohol] = useState(false);
  const [highAcidity,setHighAcidity] = useState(false);
  const [classicRange,setClassicRange] = useState(false);

  const handleInput = (event) =>{
    setSearchTerm(event.target.value);
  }

  const handleABV = () => {
    setHighAlcohol(!highAlcohol);
  }
  const handleAcidity = () => {
    setHighAcidity(!highAcidity);
  }
  const handleClassicRange = () => {
    setClassicRange(!classicRange);
  }

  let filteredSearch ="";
  switch (true) {
    case (highAlcohol && highAcidity):
      filteredSearch=beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.abv>6 && character.ph<4);
      break;
    case highAlcohol:
      filteredSearch=beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.abv>6);
      break;
    case highAcidity:
        filteredSearch=beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.ph<4);
        break;
    case classicRange:
      filteredSearch=beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.first_brewed.split("/")[1]<2010);
      break;
    default:
      filteredSearch=beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  return (
    <div className="App">
      <div className='App-Nav'>
        <NavBar handleInput={handleInput} searchTerm={searchTerm} highAlcohol={highAlcohol} handleABV={handleABV} 
        highAcidity={highAcidity} handleAcidity={handleAcidity} classicRange={classicRange} handleClassicRange={handleClassicRange}/>
      </div>
      <div className="App-main">
        <h1>Punk API</h1>
        <Main className="App-beerCards" beersData={filteredSearch} />
      </div>
    </div>
  );
}

export default App;
