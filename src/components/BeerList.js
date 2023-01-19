import React from "react";
import BeerItem from "./BeerItem";

const BeerList = ({beers}) => {
    
    // const listOfMappedBeers = beers.map((beer) => {
    //     return <BeerItem beerName={beer.name} beerTag={beer.tagline} beerDescription={beer.description} beerAbv={beer.abv} beerFood={beer.food_pairing} beerImg={beer.image_url} key={beer.id}/>
    // })

    const listOfBeerNames = beers.map((beer) => {
        return <li>{beer.name}</li>
    })

    return (
        <div>
            <ul>
            {/* {listOfMappedBeers} */}
            {listOfBeerNames}
            </ul>
        </div>
    )
}

export default BeerList