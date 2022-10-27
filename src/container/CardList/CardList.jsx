import "./CardList.scss";
import Card from "../../components/Card/Card";
import {Link} from "react-router-dom";

const CardList = (props) =>{
    const {beersData, checkPH} = props;
    let beersArray;
    if (checkPH){
        beersArray=beersData.map( (beers) =>{
            console.log(beers.name+"  "+beers.ph);
            if (beers.ph <4 && beers.ph!=null){
                return (

                <Card key={beers.id} beersId={beers.id}   beersName={beers.name} beersTag={beers.tagline} beersDesc={beers.description}
                    beersImage={beers.image_url} />
                    )
            }
            
        })
    } else{
        beersArray=beersData.map( (beers) =>{
            let desc=beers.description;
            if (beers.description.length>130 && beers.description!=undefined){
                let lastIndex=beers.description.indexOf(".",130)+1;
                desc=beers.description.slice(0,lastIndex);
            }
            return <Card key={beers.id} beersId={beers.id}  beersName={beers.name} beersTag={beers.tagline} beersDesc={desc}
            beersImage={beers.image_url} />
        })
    }
    
    return (

        <div className="card-list">{beersArray.length==0 && <h2 className="card-list--noMatch">Sorry 🥺 <br></br>Matching Not Found  </h2>}{beersArray}</div>
    )
}
export default CardList;