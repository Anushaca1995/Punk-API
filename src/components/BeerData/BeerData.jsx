import "./BeerData.scss";

const BeerData = (props) =>{
    const {name, tagline, image_url, description, food_pairing, brewers_tips, abv, ph, first_brewed}=props;
    return (
        <article className="beer">
            <h1 className="beer__beerName">{name}</h1>
            <h2 className="beer__tag">{tagline}</h2>
            <img className="beer__img" src={image_url}/>
            <p className="beer__desc">{description}</p>
            <h2 className="beer__fact">Food Pairing</h2>
            <p className="beer__desc">{food_pairing}</p>
            <h2 className="beer__fact">Brewers Tips</h2>
            <p className="beer__desc">{brewers_tips}</p>
            <h2 className="beer__fact">More Beer Details</h2>
        <ul className="beer__fact-list">
          <li>ABV : {abv} </li>
          <li>PH Value : {ph} </li>
          <li>Brewed Before : {first_brewed} </li>
        </ul>
    </article>
    )
}
export default BeerData;