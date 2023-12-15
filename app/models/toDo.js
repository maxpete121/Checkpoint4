


export class ToDoList{
    constructor(data){
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }

}


export class Weather{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.main = data.main
        this.weather = data.weather
    }

    get WeatherTemplate(){
        return`
        <div class="bg-dark text-light">
        <div>${this.name}</div>
        <div>${this.weatherConvert}</div>
        </div>
        `
    }

    get weatherConvert(){
        let newTemp = this.main.temp
        let converted = (newTemp - 273.15) * 1.8 + 32
        return converted
    }
}

// F = (K − 273.15) × 1.8 + 32