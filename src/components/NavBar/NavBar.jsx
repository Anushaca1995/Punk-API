import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import Checkbox from "../CheckBox/CheckBox";
import RangeInput from "../RangeInput/RangeInput";
const NavBar = (props) =>{
    const {handleInput, searchTerm, highAlcohol, handleABV, highAcidity, handleAcidity
    , classicRange, handleClassicRange, numberOfBeer, handleInputChange} = props;

    return (<div className="sidenav">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
        <Checkbox checkInput={highAlcohol} handleInput={handleABV} title="High ABV ( > 6%)  "/>
        <Checkbox checkInput={highAcidity} handleInput={handleAcidity} title="Acidic (ph < 4)  "/>
        <Checkbox checkInput={classicRange} handleInput={handleClassicRange} title ="Classic Range  "/>
        <RangeInput
        id="beer-range"
        label={`Number of Beers: ${numberOfBeer}`}
        min={1}
        max={20}
        value={numberOfBeer}
        onChange={handleInputChange}
      />
    </div>)
}

export default NavBar;
