// AlbumInfo.jsx

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import BeerData from "../../components/BeerData/BeerData";

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
   <BeerData name={name} tagline={tagline} image_url={image_url} description={description} food_pairing={food_pairing} brewers_tip={brewers_tips} abv={abv} ph={ph} first_brewed ={first_brewed} />
  );
};

export default BeersInfo;