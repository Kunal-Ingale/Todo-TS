import React, { useRef } from 'react'
import './Styles.css'

interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e: React.FormEvent)=> void;
}
//const InputField : React.FC<Props>= ({todo, setTodo}) =>{}
//or
const InputField= ({todo, setTodo , handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form  className='input' 
    onSubmit={(e)=> {
    handleAdd(e);
    inputRef.current?.blur()}}>
      
       <input
       ref={inputRef} 
       type="input" 
       placeholder='Enter a task' 
       className='input__box' 
       value={todo}
       onChange={(e) => setTodo(e.target.value)}
       />
       <button 
       className='input_submit' 
       type='submit'
       onSubmit={handleAdd}>
        Go</button>
    </form>
  )
}

export default InputField
