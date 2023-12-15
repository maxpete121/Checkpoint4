import { ToDoList } from './models/toDo.js'
import { Weather } from './models/toDo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Background } from './models/Background.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {ToDoList[]} */
  ToDos = [
    new ToDoList({
      description: 'yay'
    })
  ]

  /**@type {Weather} */
  Weather = null

  /**@type {Background} */
  background = null

  toDoCount = null
}

export const AppState = createObservableProxy(new ObservableAppState())