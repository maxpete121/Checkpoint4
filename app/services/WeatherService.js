import { AppState } from "../AppState.js";
import { ToDoList } from "../models/toDo.js";
import { api } from "./AxiosService.js";
import { Weather } from "../models/toDo.js";


class WeatherService{

    async getWeather(){
        const response = await api.get('/api/weather')
        console.log(response)
        const todaysWeather = response.data
        console.log('conversion check', todaysWeather)
        let weather = new Weather(todaysWeather)
        AppState.Weather = weather
    }
}


export const weatherService = new WeatherService()