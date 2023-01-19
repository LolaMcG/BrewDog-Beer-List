import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BeerList from "../components/BeerList";
import BeerSelecter from "../components/BeerSelecter";
import BeerItem from "../components/BeerItem";

const BeerBox = () => {

    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function () {
        fetch (`https://api.punkapi.com/v2/beers`)
        .then(response => response.json())
        .then(beers => setBeers(beers))
    } 

    const onBeerSelected = function(beerId){
        const selectedBeer = beers.find((beer) => beer.id == beerId)
        setSelectedBeer(selectedBeer)
    }
// double '&' acts like a ternery except we don't say what the false thing is gonna be, instead it will be Null.
// the ternery is: <boolean condtion> ? "I will be displayed if true" : "I will be displayed if false"
// it acts like a if else statement but on one line 
    return (
        <div>
            <Header header="BrewDog Beer List"/>
            <BeerSelecter beers={beers}onBeerSelectedAsAProp={onBeerSelected}/>
            
            {selectedBeer ? 
                //if selectedBeer is truthy, display the following
            <BeerItem 
                beerName={selectedBeer.name} 
                beerTag={selectedBeer.tagline} 
                beerDescription={selectedBeer.description} 
                beerAbv={selectedBeer.abv} 
                beerFood={selectedBeer.food_pairing} 
                beerImg={selectedBeer.image_url} 
                key={selectedBeer.id}/> :
                // if falsy, display the following
            <BeerList beers={beers}/>
            }
        </div>
    )
}

export default BeerBox