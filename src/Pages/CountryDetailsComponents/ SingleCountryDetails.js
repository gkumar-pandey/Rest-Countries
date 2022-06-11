import React from "react";

function SingleCountryDetails(props) {
  console.log(props)
  const {name,nativename,topleveldomain,capital,region,population,subregion,currencies,languages}=props;
  // const {name,topLevelDomain,capital,region,subregion,population,nativeName,currencies,languages} = props.countrydata;
  return (
    <>
      <div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <div>
            <div>
              <h4>Native Name: </h4>
              <span>{nativename}</span>
            </div>
            <div>
              <h4>Population: </h4>
              <span>{population}</span>
            </div>
            <div>
              <h4>Region: </h4>
              <span>{region}</span>
            </div>
            <div>
              <h4>Sub Region: </h4>
              <span>{subregion}</span>
            </div>
            <div>
              <h4>Capital: </h4>
              <span>{capital}</span>
            </div>
            <div>
              <h4>Top Level Domain: </h4>
              <span>{topleveldomain}</span>
            </div>
          </div>
          <div>
            <div>
              <h4>Currencies: </h4>
              <span>{currencies[0]['name']}</span>
            </div>
            <div>
              <h4>Languages: </h4>
              <span>{languages[0]['name']}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>Border Countries: </h4>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCountryDetails;
