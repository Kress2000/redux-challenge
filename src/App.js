import React, {useRef} from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { addTodo } from './Components/Todos';



function App() {
  const getTodo = useRef();
  const todoList = useSelector(state=> state.todos.value);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Todos App</h1>
      <div>
        <input type= "text" placeholder='add toto' id='input' name='input' ref={getTodo}/>
        <button onClick={()=>dispatch(addTodo({
            title: getTodo.current.value,
            id: todoList.length + 1
          }))}>Add Todo</button>
        <h1>List of Uncompleted tasks</h1>
        <div className='todosBox'>
          {todoList && todoList.map((task, i)=>(<div key={i} id={i} className="task">
            <div className='title'>
              <input type="checkbox" />
              <p>{task.title}</p> 
            </div>
          <button>Delete</button>
          </div>))}
        <h1>List of Completed tasks</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
