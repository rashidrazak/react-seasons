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
  const text = season === 'Winter' ? `Burr, it's chilly` : `Let's hit the beach`
  const icon = season === 'Winter' ? 'snowflake' : 'sun'

  return (
    <div>
      {/* <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
      <div>Season: {season}</div> */}
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  )
}

export default SeasonDisplay