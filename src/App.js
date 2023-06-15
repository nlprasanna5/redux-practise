import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, todoComplete,deleteTodo } from './redux/todoSlice';

function App() {
  const [todo, setTodo] = useState('');
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({
      id: Date.now(),
      todo: todo,
      completed: false,
    }));
    setTodo('');
  }

  function handleCheckbox(id) {
    dispatch(todoComplete(id));
  }

  function handleDelete(id){
    dispatch(deleteTodo(id))

  }

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked={item.completed} onChange={() => handleCheckbox(item.id)} />
            <small style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.todo}</small>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
