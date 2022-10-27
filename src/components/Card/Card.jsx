import "./Card.scss";
import {Link} from "react-router-dom";

const Card = (props) =>{
    const {beersName, beersTag, beersDesc, beersImage, beersId}=props;
    return (
        <div className="beers-card">
            <h1 className="beers-card__name">{beersName}</h1>
            <Link to={`/beer/${beersId}`} key={beersId}>
            <img className="beers-card__image" src={beersImage}/>
            </Link>
            <h2 className="beers-card__tag">{beersTag}</h2>
            <p className="beers-card__desc">{beersDesc}</p>
        </div>
    )
}
export default Card;