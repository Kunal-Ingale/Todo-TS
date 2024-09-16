import React, { useEffect, useRef, useState } from 'react'
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
    const[edit, setEdit] = useState<boolean> (false);
    const[editTodo, setEditTodo] = useState<string>(todo.todo);
    
   
    const handleDone = (id:number) =>{
        
        const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, 
         isDone:!todo.isDone} : todo)
    
         setTodos(updatedTodos)
         localStorage.setItem('todos',JSON.stringify(updatedTodos))

}

    const handleDelete = (id : number) =>{
       
           const updatedTodos = todos.filter((todo) => todo.id != id)
           setTodos(updatedTodos)
           localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    const handleEdit =(e: React.FormEvent, id:number)=>{
        e.preventDefault();
        const updatedTodos = todos.map((todo) =>(
            todo.id === id ? {...todo , todo: editTodo} : todo
        ))
        setTodos( updatedTodos);
        setEdit(false);
        
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=> {
      inputRef.current?.focus()
    },[edit])
  
  
    return (
    <form className='todos__single' onSubmit={(e)=> handleEdit(e, todo.id)}>

        {
           edit ? (
           <input type="text" 
           value={editTodo}
           onChange={(e) => setEditTodo(e.target.value)}
           className='todos__single--text1' 
           ref= {inputRef}/>
           ) :
           (
            todo.isDone ? (
                <s className='todos__single--text'>{todo.todo}</s>
            ):
            (
              <span className='todos__single--text'>{todo.todo}</span>
            )
           )
           
        }
        
    
    <div>
     <span className="icon"
     onClick={() => {
        if(!edit && !todo.isDone){
           setEdit(!edit); 
        }
     }}><FaEdit/></span> 
     <span className="icon"
     onClick={()=> handleDelete(todo.id)}> <MdDelete/></span> 
     <span className="icon"
     onClick={() => handleDone(todo.id)}><MdOutlineDone/></span> 
    </div>
    </form>
  )
}

export default SingleTodo 
