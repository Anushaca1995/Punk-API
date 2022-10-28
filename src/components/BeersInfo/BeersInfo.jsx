// AlbumInfo.jsx

import "./BeersInfo.scss";

import { useParams } from "react-router";
import { useState, useEffect } from "react";

const BeersInfo = () => {
  const { beerId } = useParams();
  const [beer, SetBeer]=useState();
  const [set, Setset]=useState(true);
  console.log(beerId);
  let url;
  let name, description, image_url, tagline, abv, ph, first_brewed, food_pairing, brewers_tips;
  const getBeer = async () => {
   
    url = `https://api.punkapi.com/v2/beers/${beerId}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    SetBeer(data);
    }
    if (set){
        getBeer();
        Setset(false);
    }
    if (beer!=undefined){
        console.log(beer);
        name=beer[0].name;
        tagline=beer[0].tagline;
        description=beer[0].description;
        image_url=beer[0].image_url;
        abv=beer[0].abv;
        ph=beer[0].ph;
        first_brewed=beer[0].first_brewed;
        food_pairing=beer[0].food_pairing.join(", ");
        brewers_tips=beer[0].brewers_tips;
    }
   
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
  );
};

export default BeersInfo;