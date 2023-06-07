import React, { useContext } from 'react'
import TodoContext from './Context/TodoContext'
import ListItem from './ListItem'


function ListGroup() {
  const { todo, deleteAll } = useContext(TodoContext)

  return (
    <ul className="list-group text-center">
      {
        todo.map(todo => <ListItem key={todo.id} todo={todo} />)
      }
        <button type="submit" class="btn btn-primary btn-sm" onClick={() => deleteAll(todo)}>Delete All</button>
      {/* <button type="button" className="btn btn-primary btn-sm" onClick={() => deleteAll(todo)}> Delete All</button> */}
    </ul>
  )
}

export default ListGroup