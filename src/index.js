import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'

class App extends Component {
  constructor(props) {
    // super call is compulsory
    super(props)

    // Initialize state
    this.state = {
      lat: null,
      long: null,
      errorMessage: ''
    }
  }

  // API calls or data fetching shall be put inside this lifecycle methood (usually)
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Always use setState to update state object
        this.setState({ 
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      },
      (error) => {
        this.setState({
          errorMessage: error.message
        })
      }
    )
  }

  // render method is a must have in React class component
  render() {
    if (this.state.errorMessage && (!this.state.lat && !this.state.long)) {
      return <div>Error: { this.state.errorMessage }</div>
    }

    if (!this.state.errorMessage && (this.state.lat && this.state.long)) {
      return (
        <div>
          <div>Latitude: { this.state.lat }</div>
          <div>Longitude: { this.state.long }</div>
        </div>
      )
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)