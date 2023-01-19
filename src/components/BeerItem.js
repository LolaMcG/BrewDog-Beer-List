import React from "react";

const BeerItem = ({beerName, beerTag, beerAbv, beerDescription, beerFood, beerImg}) => {
    return (
        <div>
            <li>
                <h2>
                    {beerName}
                </h2>
                <h3>
                    {beerTag}
                </h3>
                <p>
                    {beerDescription}<br></br>
                    {beerFood}<br></br>
                    {beerAbv}<br></br>
                    <img src={beerImg}/>
                </p>
            </li>
        </div>
    )
}

export default BeerItem