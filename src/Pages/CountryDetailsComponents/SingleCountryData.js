import { border } from "@mui/system";
import React from "react";

function SingleCountryData(props) {
  const { title, data } = props;
  return <>
    <div style={{display: 'flex',alignItems: 'center' ,height:'15%'}}>
      
      <h3 style={{fontSize: '1.3rem'}}>{title}</h3>
      <p style={{fontSize: '1.2rem', marginLeft: '5px'}}>{data}</p>
    </div>
  </>;
}

export default SingleCountryData;
