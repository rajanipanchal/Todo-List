import React, { useContext } from 'react'
import TodoContext from './Context/TodoContext'
import ListItem from './ListItem'


function ListGroup() {
  const { todo, deleteAll } = useContext(TodoContext)

  return (
    <ul className="list-group">
      {
        todo.map(todo => <ListItem key={todo.id} todo={todo} />)
      }
      <button type="button" className="btn btn-primary btn-sm" onClick={() => deleteAll(todo)}> Delete All</button>
    </ul>
  )
}

export default ListGroup