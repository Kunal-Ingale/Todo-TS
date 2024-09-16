import React, { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'
import { Todo } from './model'
import TodoList from './Components/TodoList'

const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const[todos,setTodos] = useState<Todo []>(
    () => {
      const savedTodos = localStorage.getItem('todos');
      if(savedTodos){
        return JSON.parse(savedTodos)
      }
      return [];
    }
  )
 
  const handleAdd = (e: React.FormEvent, todo:string)=>{
    e.preventDefault();
    if (todo.trim() !== ""){
    const newTodo = [...todos, { id: Date.now(), todo, isDone: false }];
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
    setTodo("");
  }
   
  }
  console.log(todos);
  
  return (
    <div>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InputField 
          todo={todo} 
          setTodo={setTodo} 
          handleAdd={(e) => handleAdd(e, todo)}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
