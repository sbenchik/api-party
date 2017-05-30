import React, { Component } from 'react'


class Forecast extends Component{
    
    state = {
        forecast: {
            city: '',
            description: '',
            temp: '',
            max: '',
            min: '',
        }
    }

    constructor(props){
        super()
        this.fetchWeatherData(props)
    }

    toF(temp){
        return Math.trunc(temp * 1.8 - 459.67)
    }

    fetchWeatherData(props){
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${props.match.params.loc},us&APPID=aaee6597752663129f58cb7b27e161f9`)
            .then(response => response.json())
            .then(data => {
                const forecast = {
                    city: data.name,
                    description: data.weather[0].description,
                    temp: this.toF(data.main.temp),
                    max: this.toF(data.main.temp_max),
                    min: this.toF(data.main.temp_min),
                }
                this.setState({ forecast })
            })
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged){
            this.fetchWeatherData(nextProps)
        }
    }

    render(){
        const { forecast } = this.state
        return(
            <div className="forecast">
                <h2>{forecast.city}</h2>
                <h3>Currently: {forecast.temp}°, {forecast.description}</h3>
                <h3>High: {forecast.max}°</h3>
                <h3>Low: {forecast.min}°</h3>
            </div>
        )
    }
}

export default Forecast