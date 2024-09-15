import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { Todo } from '../model';


type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo : React.FC<Props> = ({todo, todos , setTodos}) => {
   
    const handleDone = (id:number) =>{
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, 
                isDone:!todo.isDone} : todo)
    )}
  return (
    <form className='todos__single '>
        {
            todo.isDone ? (
                <s className='todos__single--text'>{todo.todo}</s>
            ):(
              <span className='todos__single--text'>{todo.todo}</span>
            )
        }
        
    
    <div>
     <span className="icon"><FaEdit/></span> 
     <span className="icon"> <MdDelete/></span> 
     <span className="icon"
     onClick={() => handleDone(todo.id)}><MdOutlineDone/></span> 
    </div>
    </form>
  )
}

export default SingleTodo 
