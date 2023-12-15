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

// function _drawCount(){
//     let count = AppState.toDoCount
//     console.log('drawCount', count)
//     document.getElementById('list-count-view').innerText = count
// }

export class ToDoController{
    constructor(){
        console.log('to do loaded')
        AppState.on('user', this.getToDo)
        AppState.on('ToDos', this.toDoCount)
        AppState.on('ToDos', _drawToDo) 
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
        let toDo = AppState.ToDos.length
        document.getElementById('list-count-view').innerText = toDo
    }

}