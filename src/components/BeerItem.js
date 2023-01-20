import React from "react";


//**HERE IS WHERE THE STUFF IN YELLOW FROM THE BEERBOX CONTAINER IS PASSED IN AS A PROP, AFTER HAVING BEING TRANSLATED INTO A PROP IN THE PARENT CONTAINER */
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
                <section>
                    <h4>Description: </h4>
                    {beerDescription}<br></br>
                    <h4>This beer pairs well with: </h4>
                    {beerFood}<br></br>
                    <h4>Alcohol content: </h4>
                    {beerAbv}<br></br>
                    <br></br>
                    <img src={beerImg}/>
                </section>
            </li>
        </div>
    )
}

export default BeerItem