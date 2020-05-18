import React from 'react'

const Spinner = (props) => {
  const {message} = props

  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  )
}

// In case props are not passed from the parent, this props will be used instead
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner