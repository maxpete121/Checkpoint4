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
    }

    async getWeather(){
        await weatherService.getWeather()
        _drawWeather()
    }
}