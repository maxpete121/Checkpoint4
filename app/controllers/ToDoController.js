import { AppState } from "../AppState.js"
import { ToDoList } from "../models/toDo.js"



export class ToDoController{
    constructor(){
        console.log('to do loaded')
        this.currentTime()
        setInterval(this.currentTime, 15000)
    }

    

    currentTime(){
        let time = new Date()
        let newTime = time.toLocaleDateString('en-US', {hour: '2-digit', minute: '2-digit'})
        let finalTime = newTime.slice(11,20)
        document.getElementById('current-time').innerText = finalTime
        console.log('test time')
    }

}