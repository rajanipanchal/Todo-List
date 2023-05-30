import React, { useContext } from 'react'
import TodoContext from './Context/TodoContext'


function ListItem ({todo}) {
  const {deleteTodo ,editTodo} = useContext(TodoContext)
  return (
    
    <li className="list-group-item rounded-0">{todo.text}
    <i className="bi bi-trash-fill float-end" onClick={()=>deleteTodo(todo.id)}></i>
    <i className="bi bi-pencil-square float-end" onClick={()=>editTodo(todo)}></i>
    </li>
   
  )
}
export default ListItem