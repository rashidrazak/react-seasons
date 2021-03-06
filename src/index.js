import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends Component {
  /*
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
  */

  // Alternative way to initialize state without using constructor
  state = {
    lat: null,
    long: null,
    errorMessage: ''
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

  renderContent() {
    if (this.state.errorMessage && (!this.state.lat && !this.state.long)) {
      return <div>Error: { this.state.errorMessage }</div>
    }

    if (!this.state.errorMessage && (this.state.lat && this.state.long)) {
      return (
        <SeasonDisplay lat={this.state.lat} long={this.state.long} />
      )
    }

    return <Spinner message="Please accept location request..." />
  }

  // render method is a must have in React class component
  render() {
    return this.renderContent()
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)