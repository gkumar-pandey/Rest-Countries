import React from 'react'

function SingleCountryData(props) {
  const {title, data}=props;
  return (
    <>
      <div style={style.common}>
        <h3>{title}</h3>
        <p>{data}</p>
      </div>
    </>
  )
}
const style = { 
  common: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid green'
  }
}

export default SingleCountryData