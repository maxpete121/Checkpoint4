


export class ToDoList{
    constructor(data){
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get toDoTemplate(){
        return`
        <div class="d-flex justify-content-evenly bg-light mb-2 p-2">
        <div class="w-25">${this.description}</div>
        <button onclick="app.ToDoController.completeToDo('${this.id}')" class="btn btn-outline-dark">Complete</button>
        <button onclick="app.ToDoController.deleteToDo('${this.id}')" class="btn btn-outline-dark">Delete</button>
        </div>
        `
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
        <div class="bg-dark text-light p-2">
        <div class="d-flex">
        <h5 class="me-2">City:</h5>
        <h5>${this.name}</h5>
        </div>
        <div class="d-flex">
        <h5 class="me-2">Temperature:</h5>
        <h5>${this.weatherConvert}</h5>
        <h5>°F</h5>
        </div>
        </div>
        `
    }

    get weatherConvert(){
        let newTemp = this.main.temp
        let converted = (newTemp - 273.15) * 1.8 + 32
        return Math.round(converted) 
    }
}

// F = (K − 273.15) × 1.8 + 32