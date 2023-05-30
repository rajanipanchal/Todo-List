const TodoReducer = (state,action)=>{
    switch (action.type) {
        case "DELETE":
          return{
            ...state,
            todo : state.todo.filter(item=>item.id !== action.payload)
          }
          case "SAVE":
            return{
              ...state,
              todo : [...state.todo , action.payload]
            }
        
            case "EDIT":
              return{
                ...state , 
                edit : {todo : action.payload , isEdit : true}
              }
              case "UPDATE":{
                return{
                  ...state,
                  todo : state.todo.map(item => item.id === action.payload.id ? {...item , text : action.payload.text} :item ),
                  edit : {todo : {} , isEdit : false}
                }
              }
              case "DELETEALL":{
                return{
                  ...state,
                todo:[]
              }
         
              }
        

        default:
            return state
    }

}
export default TodoReducer