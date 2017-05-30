import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Forecast from './Forecast'
import './Weather.css'

class Weather extends Component{
    state = {
        loc: '',
    }
    
    handleChange = (ev) => {
        const loc = ev.currentTarget.value
        this.setState({ loc })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/weather/${this.state.loc}`)
    }

    render(){
        return(
            <div className="weather">
                <img className="weather-logo" src="https://icons.wxug.com/i/c/v4/partlycloudy.svg" alt="weather"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.loc} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Get the forecast</button>
                    </div>
                </form>

                <Route exact path='/weather' render={() => (<h3>Please enter a location to get the forecast for</h3>)} />
                <Route path='/weather/:loc' component={Forecast} />
            </div>
        )
    }
}

export default Weather