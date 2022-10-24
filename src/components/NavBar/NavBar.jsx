import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import Checkbox from "../CheckBox/CheckBox";
const NavBar = (props) =>{
    const {handleInput, searchTerm, highAlcohol, handleABV, highAcidity, handleAcidity
    , classicRange, handleClassicRange} = props;

    return (<div className="sidenav">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
        <Checkbox checkInput={highAlcohol} handleInput={handleABV} title="High ABV ( > 6%) "/>
        <Checkbox checkInput={highAcidity} handleInput={handleAcidity} title="Acidic (ph < 4) "/>
        <Checkbox checkInput={classicRange} handleInput={handleClassicRange} title ="Classic Range"/>
    </div>)
}

export default NavBar;
