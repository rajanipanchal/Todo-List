import React, { useContext, useEffect, useState } from 'react'
import TodoContext from './Context/TodoContext'

function Form() {
  const { saveTodo, edit,updateTodo } = useContext(TodoContext)
  const [text, setText] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit.isEdit){
      updateTodo(edit.todo.id , text)
    }else {
      saveTodo(text)
    }
    setText("")
  }
  useEffect(() => {
    setText(edit.todo.text)
  }, [edit])
  return (
    <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group p-5 d-flex">
        <input type="text" value={text} className="form-control rounded-0" placeholder="Enter Your Task" onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="btn btn-transparent rounded-0 "><i className="bi bi-plus"></i>Add Task</button>
      </div>
    </form>
  )
}

export default Form