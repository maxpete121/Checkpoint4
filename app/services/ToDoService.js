import { AppState } from "../AppState.js"
import { ToDoList } from "../models/toDo.js"
import { getFormData } from "../utils/FormHandler.js"
import { api } from "./AxiosService.js"


class ToDoService{

    async getToDo(){
        let owner = AppState.ToDos[0]
        const response = await api.get(`api/todos`)
        let allToDo = response.data.map(todo => new ToDoList(todo))
        AppState.ToDos = allToDo
        
    }

    async makeToDo(fData){
        const response = await api.post('api/todos', fData)
        console.log(response)
        const newToDo = new ToDoList(response.data)
        AppState.ToDos.push(newToDo)
    }

    async completeToDo(toDoId){
        let completeToDo = AppState.ToDos.find(todo => todo.id == toDoId)
        completeToDo.completed = true
        const response = await api.put(`api/todos/${toDoId}`, completeToDo)
        AppState.emit('ToDos')
    }

    async deleteToDo(toDoId){
        const response = await api.delete(`api/todos/${toDoId}`)
        let toDoDelete = AppState.ToDos.findIndex(todo => todo.id == toDoId)
        AppState.ToDos.splice(toDoDelete, 1)
    }
}


export const toDoService = new ToDoService()