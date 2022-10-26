import "./MainAPI.scss";
import CardList from "../../container/CardList/CardList";
const MainAPI = (props) =>{
    const {beersData} = props;
    return(
        <div className="main-card">
        <CardList beersData={beersData}/>
        </div>
    )
}

export default MainAPI;