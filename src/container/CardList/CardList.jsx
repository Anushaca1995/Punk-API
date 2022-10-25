import "./CardList.scss";
import Card from "../../components/Card/Card";
const CardList = (props) =>{
    const {beersData} = props;
    const beersArray=beersData.map( beers =>{
        return <Card key={beers.id}  beersName={beers.name} beersTag={beers.tagline} beersDesc={beers.description}
        beersImage={beers.image_url} />
    })
    return (

        <div className="card-list">{beersArray.length==0 && <h2 className="card-list--noMatch">Sorry 🥺 <br></br>Matching Not Found  </h2>}{beersArray}</div>
    )
}
export default CardList;