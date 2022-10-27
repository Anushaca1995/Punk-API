import './App.scss';
import Main from "./container/Main/Main";
import beersData from "./data/beers.js";
import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeersInfo from './components/BeersInfo/BeersInfo';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [highAlcohol, setHighAlcohol] = useState(false);
  const [abv, setAbv] = useState();
  const [highAcidity, setHighAcidity] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [cRVal, setCRVal] = useState();
  const [beers, setBeers] = useState();
  const getBeer = async (highAlcohol, cRVal, classicRange, abv) => {
    const urlpath = `https://api.punkapi.com/v2/beers?`;
    let url = urlpath;
    if (highAlcohol) {
      setAbv(6);
    }
    console.log("Checked alcohol? " + highAlcohol + " ABV=" + abv);
    if (highAlcohol && abv != undefined) {
      url = urlpath + `abv_gt=${abv}`;
    }
    if (classicRange) {
      setCRVal("10/2010");
    }
    console.log("Checked:" + classicRange + ", cr=" + cRVal);
    if (classicRange && cRVal != undefined) {
      if (url != urlpath) {
        url += `&brewed_before=${cRVal}`;
      } else {
        url += `brewed_before=${cRVal}`;
      }

    }
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setBeers(data);
  };
  
  useEffect(() => {
    getBeer(highAlcohol, cRVal, classicRange, abv);
  }, [highAlcohol, cRVal, classicRange, abv]);
  const handleInput = (event) => {
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

  let filteredSearch = "";
  switch (true) {
    case (highAlcohol && highAcidity):
      filteredSearch = beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.abv > 6 && character.ph < 4);
      break;
    case highAlcohol:
      filteredSearch = beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.abv > 6);
      break;
    case highAcidity:
      filteredSearch = beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.ph < 4);
      break;
    case classicRange:
      filteredSearch = beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.first_brewed.split("/")[1] < 2010);
      break;
    default:
      filteredSearch = beersData.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  return (
    <Router>


      <Routes>
        <Route
          path="/Punk-API"
          element={
            <div className="App">
              <div className='App-Nav'>
                <NavBar handleInput={handleInput} searchTerm={searchTerm} highAlcohol={highAlcohol} handleABV={handleABV}
                  highAcidity={highAcidity} handleAcidity={handleAcidity} classicRange={classicRange} handleClassicRange={handleClassicRange} />
              </div>
              <div className="App-main">
                <h1 className='App-main--header'>Punk API</h1>
                {beers && (
                  <Main className="App-beerCards"
                    beersData={beers} checkPH={highAcidity}
                  />)}
              </div>
            </div>
          }
        ></Route>
         <Route
  path="/beer/:beerId"
  element={<BeersInfo />}
/>
      </Routes>

    </Router>
  );
}
export default App;
