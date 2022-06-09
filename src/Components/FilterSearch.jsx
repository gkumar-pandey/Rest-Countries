import React from 'react'
import SearchBar from './SearchBar'
function FilterSearch() {
  return (
    <div style={filterComponentStyle.style}>
        <SearchBar/>
    </div>
  )
}
const filterComponentStyle = {
  style: {
    paddingTop: '4rem',
    width: '92%',
    margin: 'auto'
  }
}
export default FilterSearch