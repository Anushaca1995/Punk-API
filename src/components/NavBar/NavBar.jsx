import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import Checkbox from "../CheckBox/CheckBox";
const NavBar = (props) =>{
    const {handleInput, searchTerm, highAlcohol, handleABV, highAcidity, handleAcidity} = props;

    return (<div className="sidenav">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
        <Checkbox highAlcohol={highAlcohol} handleABV={handleABV} title="High Alcohol"/>
        <Checkbox highAcidity={highAcidity} handleABV={handleAcidity} title="High Acidity"/>
    </div>)
}

export default NavBar;
