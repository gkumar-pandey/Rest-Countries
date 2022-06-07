import React from "react";

function CountryCardDetails(props) {
  const { countryName, Population, Region, Capital } = props;
  return (
    <>
      <div>
        <h2>{countryName}</h2>
        <div>
          <div style={coustemStyle.info}>
            <h4>Population: </h4>
            <span style={coustemStyle.data}>{Population}</span>
          </div>
          <div style={coustemStyle.info}>
            <h4>Region: </h4>
            <span style={coustemStyle.data}>{Region}</span>
          </div>
          <div style={coustemStyle.info}>
            <h4>Capital: </h4>
            <span style={coustemStyle.data}>{Capital}</span>
          </div>
        </div>
      </div>
    </>
  );
}

const coustemStyle = {
  info: {
    display: "flex",
    alignItems: "center",
    height: '1.6rem'
  },
  data: {
    marginLeft: "5px",
  },
};

export default CountryCardDetails;
