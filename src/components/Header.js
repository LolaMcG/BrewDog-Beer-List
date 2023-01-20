import React from "react";


//**HERE IS WHERE THE STUFF IN YELLOW FROM THE BEERBOX CONTAINER IS PASSED IN AS A PROP, AFTER HAVING BEING TRANSLATED INTO A PROP IN THE PARENT CONTAINER */
const Header = ({header}) => {
    return (
        <h1 className="header">{header}</h1>
    )
}

export default Header