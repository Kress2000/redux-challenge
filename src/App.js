import React, {useRef} from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { addTodo, deleteTodo, completeTodo} from './Components/Todos';

function App() {
  const getTodo = useRef();
  const todoList = useSelector(state=> state.todos.value);
  
  const dispatch = useDispatch();
  const addTodoFn = ()=>{
    dispatch(addTodo({
      title: getTodo.current.value,
      id: todoList.length - 1
    }))
    getTodo.current.value = "";
  }
  
  let UncompletedTasks = todoList.filter(todo=>todo.completed===undefined) // tasks added
  let completedTasks = todoList.filter(todo=>todo.completed===true); //finished tasks

  return (
    <div className="App">
      <h1>Todos App</h1>
      <div>
        <div className='addBox'>
        <input type= "text" placeholder='add toto' id='input' name='input' ref={getTodo}/>
        <button id="addinput" onClick={addTodoFn}>Add Todo</button>
        </div>
        <h1>List of Uncompleted tasks</h1>
        <div className='todosBox'>
          {UncompletedTasks && UncompletedTasks.map((task, i)=>(<div key={i} id={i}className="task">
            <div className='title'>
              <input type="checkbox" onClick={()=>dispatch(completeTodo({id: task.id, completed: true}))} />
              <p>{task.title}</p> 
            </div>
          <button onClick={()=>dispatch(deleteTodo({id: task.id}))}>Delete</button>
          </div>))}
        <h1>List of Completed tasks</h1>
        {completedTasks && completedTasks.map((task, i)=>(<div key={i} id={i}className="task">
            <div className='title completed'>
              <input type="checkbox" onClick={()=>dispatch(completeTodo({id: task.id, completed: undefined}))} defaultChecked/>
              <p>{task.title}</p> 
            </div>
          <button onClick={()=>dispatch(deleteTodo({id: task.id}))}>Delete</button>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
