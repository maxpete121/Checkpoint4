


export class ToDoList{
    constructor(data){
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get toDoTemplate(){
        return`
        <div style="background-color: ${this.toDoCompleteTemp};" class="d-flex justify-content-evenly mb-2 p-2 rounded-2">
        <div class="w-25">${this.description}</div>
        <button onclick="app.ToDoController.completeToDo('${this.id}')" class="btn btn-outline-dark">${this.toDoCompleteButton}</button>
        <button onclick="app.ToDoController.deleteToDo('${this.id}')" class="btn btn-outline-dark">Delete</button>
        </div>
        `
    }

    get toDoCompleteTemp(){
        if(this.completed == true){
            return `green`
        }else if(this.completed == false){
            return`white`
        }
    }

    get toDoCompleteButton(){
        if(this.completed == true){
            return `Finished`
        }else if(this.completed == false){
            return`Finish`
        }
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
        <div class="text-light p-2">
        <div class="d-flex">
        <h5 class="me-2">City:</h5>
        <h5>${this.name}</h5>
        </div>
        <div class="d-flex">
        <h5 class="me-2">Temperature:</h5>
        <h5 id="temp-F">${this.weatherConvertF}</h5>
        <h5 id="temp-F-tag" class="me-2">°F</h5>
        <h5 id="temp-C" style="display: none;">${this.weatherConvertC}</h5>
        <h5 id="temp-C-tag" class="me-2" style="display: none;">°C</h5>
        <button class="btn btn-outline-light" onclick="app.WeatherController.changeFtoC()" id="temp-C-button">°C</button>
        <button class="btn btn-outline-light" onclick="app.WeatherController.changeCtoF()" id="temp-F-button" style="display: none;">°F</button>
        </div>
        <div class="d-flex">
        <h5 class="me-2">Sky:</h5>
        <h5>${this.weather[0].main}</h5>
        </div>
        </div>
        `
    }

    get weatherConvertF(){
        let FTemp = this.main.temp
        let convertedF = (FTemp - 273.15) * 1.8 + 32
        return Math.round(convertedF) 
    }

    get weatherConvertC(){
        let CTemp = this.main.temp
        let convertedC = CTemp - 273.15
        return Math.round(convertedC * 100) / 100
    }
}

// F = (K − 273.15) × 1.8 + 32