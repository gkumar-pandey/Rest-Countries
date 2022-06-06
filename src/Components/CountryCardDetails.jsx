import React from 'react'

function CountryCardDetails(props) {
    const {countryName, Population, Region, Capital} = props;
  return (
    <>
        <div>
            <h2>
                {countryName}
            </h2>
        </div>
        
    </>
  )
}

export default CountryCardDetails