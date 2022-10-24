import logo from './logo.svg';
import './App.scss';
import Main from "./container/Main/Main";
import beersData from "./data/beers.js";
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <div className='App-Nav'>
        Navigation
       
      </div>
      <div className="App-main">
        <h1>Punk API</h1>
        <Main className="App-beerCards" beersData={beersData} />
      </div>
    </div>
  );
}

export default App;
