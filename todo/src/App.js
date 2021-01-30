import './App.css';
import React, { useState, useReducer } from 'react';
import reducer, { TodoList } from './reducers/simpleReducer';
import Todo from './components/Todo';

export const ACTIONS ={
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}


function App() {
const [todos, dispatch] = useReducer(reducer, TodoList );
const [item, setItem] = useState('');
   
function handleSubmit(e) {
   e.preventDefault();
   dispatch({type: ACTIONS.ADD_TODO, payload: {item: item} });
   setItem('');
    }
   

return (
  <div className="App">
      <form>
        <input type="text" value={item} onChange={e => setItem(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
     <div>
      {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
      </div>
    </div>
  );
}

export default App;
