import React from "react";
import BeerItem from "./BeerItem";


//**HERE IS WHERE THE STUFF IN YELLOW FROM THE BEERBOX CONTAINER IS PASSED IN AS A PROP, AFTER HAVING BEING TRANSLATED INTO A PROP IN THE PARENT CONTAINER */
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