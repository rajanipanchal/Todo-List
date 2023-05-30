import { createContext, useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";


const TodoContext  = createContext()
export const TodoProvider = ({children}) => {
 
    const initialState = {
        todo : [ ],
        edit:{
            todo: {},
            isEdit : false
        }
    }
    
     const deleteTodo = (id)=>{
        dispatch({
            type : "DELETE",
            payload :id
        })
     }
     const saveTodo = (text)=>{
        const newTodo = {
            id : crypto.randomUUID(),
            text : text
        }
        dispatch({
            type: "SAVE",
            payload : newTodo
         })
     }
     const editTodo =(todo)=>{
        dispatch({
            type: "EDIT" ,
            payload : todo
        })
     }
     const updateTodo = (id,text)=>{
        dispatch({
            type : "UPDATE",
            payload: {id ,text}
        })
     }
const deleteAll = (todo)=>{
dispatch ({
    type : "DELETEALL",
    payload : todo
})

}
     

    const [state,dispatch]= useReducer (TodoReducer  ,initialState)
    return(
        <TodoContext.Provider value={{
            todo : state.todo,
            updateTodo,
            deleteAll,
            edit: state.edit,
            deleteTodo,
            editTodo,
            saveTodo,
           
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext