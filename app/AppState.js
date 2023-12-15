import { ToDoList } from './models/toDo.js'
import { Weather } from './models/toDo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {ToDoList[]} */
  ToDos = []

  /**@type {Weather} */
  Weather = null
}

export const AppState = createObservableProxy(new ObservableAppState())