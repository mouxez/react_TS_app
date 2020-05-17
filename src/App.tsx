import React, {useState, useEffect} from 'react';
import { ToDoForm } from './components/ToDoForm';
import { Navbar } from './components/Navbar';
import { IToDo } from './interfaces';
import {ToDoList} from './components/ToDoList'

declare var confirm: (question: string) => boolean
 
const App: React.FC = () => {
  const [todos, setTodos] = useState<IToDo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`todos`) || `[]`) as IToDo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(`todos`, JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newToDo: IToDo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newToDo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm(`Are you sure?`)
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return <>
  <Navbar />
  <div className="container">
    <ToDoForm onAdd={addHandler}/>
    <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
  </div>
  </>
}

export default App;
