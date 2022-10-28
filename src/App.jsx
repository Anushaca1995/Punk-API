import './App.scss';
import Main from "./container/Main/Main";
import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeersInfo from './container/BeersInfo/BeersInfo';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [highAlcohol, setHighAlcohol] = useState(false);
  const [abv, setAbv] = useState();
  const [highAcidity, setHighAcidity] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [cRVal, setCRVal] = useState();
  const [beers, setBeers] = useState();
  const [numberOfBeer, setNumberOfBeer] = useState(10);

  const getBeer = async (highAlcohol, cRVal, classicRange, abv, searchTerm, numberOfBeer) => {
    const urlpath = `https://api.punkapi.com/v2/beers?per_page=${numberOfBeer}`;
    let url = urlpath;
    if (highAlcohol) {
      setAbv(6);
    }
    console.log("Checked alcohol? " + highAlcohol + " ABV=" + abv);
    if (highAlcohol && abv != undefined) {
      url = urlpath + `&abv_gt=${abv}`;
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
    if (searchTerm != '') {
      if (url != urlpath) {
        url += `&beer_name=${searchTerm}`;
      } else {
        url += `beer_name=${searchTerm}`;
      }

    }
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setBeers(data);
  };
  
  useEffect(() => {
    getBeer(highAlcohol, cRVal, classicRange, abv, searchTerm, numberOfBeer);
  }, [highAlcohol, cRVal, classicRange, abv, searchTerm, numberOfBeer]);
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
    console.log("Search term "+searchTerm);
  }

  const handleInputChange = (event) => {
    setNumberOfBeer(event.target.value);
  };

  const handleABV = () => {
    setHighAlcohol(!highAlcohol);
  }
  const handleAcidity = () => {
    setHighAcidity(!highAcidity);
  }
  const handleClassicRange = () => {
    setClassicRange(!classicRange);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/Punk-API"
          element={
            <div className="App">
            <div className='App-Nav'>
              <NavBar numberOfBeer={numberOfBeer} handleInputChange={handleInputChange} handleInput={handleInput} searchTerm={searchTerm} highAlcohol={highAlcohol} handleABV={handleABV}
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
