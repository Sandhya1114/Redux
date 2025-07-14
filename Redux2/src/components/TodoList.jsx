// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, removeTodo } from '../redux/todoSlice';

// const TodoList = () => {
//   const [input, setInput] = useState('');
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     if (input.trim()) {
//       dispatch(addTodo(input));
//       setInput('');
//     }
//   };

//   const handleRemove = (id) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <div className="todo-list">
//       <h3>Todo List</h3>
//       <div className="todo-input">
//         <input
//           type="text"
//           placeholder="Add a task"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleAdd}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleRemove(todo.id)}>&times;</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos, addTodo, deleteTodo } from '../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const text = prompt('New Todo:');
    if (text) dispatch(addTodo(text));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {items.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoList;