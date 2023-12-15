import { weatherService } from "../services/weatherService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/toDo.js"

function _drawWeather(){
    let newWeather = AppState.Weather
    let content = newWeather.WeatherTemplate
    newWeather += content
    document.getElementById('weather-view').innerHTML = content
}



export class WeatherController{
    constructor(){
        console.log('weather loaded')
        AppState.on('user', this.getWeather)
        AppState.on('Weather',_drawWeather)
        setInterval(this.currentTime, 15000)
    }

    async getWeather(){
        await weatherService.getWeather()
        _drawWeather()
    }

    currentTime(){
        let time = new Date()
        let newTime = time.toLocaleDateString('en-US', {hour: '2-digit', minute: '2-digit'})
        let finalTime = newTime.slice(11,20)
        document.getElementById('current-time').innerText = finalTime
        console.log('test time')
    }
}