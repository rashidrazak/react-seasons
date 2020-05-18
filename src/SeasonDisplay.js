import React from 'react'

// Best practice to have config object like this
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s chilly',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  // Use object destructuring
  const {lat, long} = props

  const season = getSeason(lat, new Date().getMonth())

  // Get values from config object defined earlier
  const {text, iconName} = seasonConfig[season]

  return (
    <div>
      {/* <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
      <div>Season: {season}</div> */}
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay