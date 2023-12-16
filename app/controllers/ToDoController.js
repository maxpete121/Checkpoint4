import { AppState } from "../AppState.js"
import { ToDoList } from "../models/toDo.js"
import { api } from "../services/AxiosService.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"



function _drawToDo(){
    let allDos = AppState.ToDos
    let content = ''
    allDos.forEach(toDo => content += toDo.toDoTemplate)
    document.getElementById('toDo-view').innerHTML = content
}

function _drawFinished(){
    if(AppState.FinishedToDo != undefined){
        let finished = AppState.FinishedToDo
        let content = ''
        finished.forEach(todo => content += todo.toDoTemplate)
        document.getElementById('finished-todo').innerHTML= content
    }
}

export class ToDoController{
    constructor(){
        console.log('to do loaded')
        AppState.on('user', this.getToDo)
        AppState.on('ToDos', this.toDoCount)
        AppState.on('ToDos', _drawToDo) 
        AppState.on('FinishedToDo', _drawFinished)
    }

    
    async getToDo(){
        await toDoService.getToDo()
    }

    async makeToDo(){
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        await toDoService.makeToDo(formData)
        await form.reset()
        _drawToDo()
    }


    completeToDo(toDoId){
        toDoService.completeToDo(toDoId)
    }

    deleteToDo(toDoId){
        toDoService.deleteToDo(toDoId)
    }

    toDoCount(){
        let unfinished = AppState.ToDos.filter(todo => todo.completed == false)
        let count = unfinished.length
        document.getElementById('list-count-view').innerText = count
    }

}