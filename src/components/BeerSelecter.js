import React from "react";

//**HERE IS WHERE THE STUFF IN YELLOW FROM THE BEERBOX CONTAINER IS PASSED IN AS A PROP, AFTER HAVING BEING TRANSLATED INTO A PROP IN THE PARENT CONTAINER */
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