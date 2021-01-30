import { ACTIONS } from "../App";

export const TodoList = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Learn about switch',
      completed: false,
      id: 3892987590
    },
    {
      item: 'Learn about action',
      completed: true,
      id: 3892987591
    }
  ]

function newTodo(item){
    return { id: Date.now(), item: item, completed: false }        
  }

const reducer = (todos, action) => {
    switch(action.type){
      case ACTIONS.ADD_TODO: 
         return [...todos, newTodo(action.payload.item)]
      case ACTIONS.TOGGLE_TODO: 
         return todos.map(todo => {
        if(todo.id === action.payload.id){
         return {...todo, completed: !todo.completed}
          }
         return todo;
        })
      case ACTIONS.DELETE_TODO:
         return todos.filter(todo => todo.id != action.payload.id)
      default: return ;
         
    }  
     
  }
  
export default reducer;
