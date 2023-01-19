import React from "react";

const BeerSelecter = ({onBeerSelectedAsAProp, beers}) => {

    const handleChange = function(evt) {
        const beerId = (evt.target.value)
        onBeerSelectedAsAProp(beerId)
    }

    const beerOptions = beers.map((beer) => {
        return(
            <option value={beer.id}>{beer.name}</option>
        )
    })


    return (
        <select defaultValue="" onChange={handleChange} id="dropDown">
            <option value="" selected>Choose a beer!</option>
            {beerOptions}
        </select>
    )
}

export default BeerSelecter