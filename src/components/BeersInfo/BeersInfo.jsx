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
  let name, description, image_url, tagline;
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
    }
   
  return (
    <article className="beer">
            <h1 className="beer__beerName">{name}</h1>
            <img className="beer__img" src={image_url}/>
            <h2 className="beer__tag">{tagline}</h2>
            <p className="beer__desc">{description}</p>
    </article>
  );
};

export default BeersInfo;