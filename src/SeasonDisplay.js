import React from 'react'

const SeasonDisplay = (props) => {
  // Use object destructuring
  const {lat, long} = props

  return (
    <div>
      <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
    </div>
  )
}

export default SeasonDisplay