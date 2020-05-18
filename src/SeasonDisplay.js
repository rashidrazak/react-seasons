import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  // Use object destructuring
  const {lat, long} = props

  const season = getSeason(lat, new Date().getMonth())

  return (
    <div>
      <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
      <div>Season: {season}</div>
    </div>
  )
}

export default SeasonDisplay