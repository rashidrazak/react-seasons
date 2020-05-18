import './SeasonDisplay.css' // Webpack will see that we're importing this CSS file
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
  const {lat} = props

  const season = getSeason(lat, new Date().getMonth())

  // Get values from config object defined earlier
  const {text, iconName} = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay