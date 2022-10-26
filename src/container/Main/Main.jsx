import "./Main.scss";
import CardList from "../../container/CardList/CardList";
const Main = (props) =>{
    const {beersData, checkPH} = props;
    return(
        <div className="main-card">
        <CardList beersData={beersData} checkPH={checkPH}/>
        </div>
    )
}

export default Main;