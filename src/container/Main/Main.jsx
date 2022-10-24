import "./Main.scss";
import CardList from "../../container/CardList/CardList";
const Main = (props) =>{
    const {beersData} = props;
    return(
        <div className="main-card">
        <CardList beersData={beersData}/>
        </div>
    )
}

export default Main;