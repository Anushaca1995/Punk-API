import "./Card.scss";

const Card = (props) =>{
    const {beersName, beersTag, beersDesc, beersImage}=props;
    return (
        <div className="beers-card">
            <h1 className="beers-card__name">{beersName}</h1>
            <img className="beers-card__image" src={beersImage}/>
            <h2 className="beers-card__tag">{beersTag}</h2>
            <p className="beers-card__desc">{beersDesc}</p>
        </div>
    )
}
export default Card;