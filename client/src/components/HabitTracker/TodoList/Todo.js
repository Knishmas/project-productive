import React, { useState } from 'react';
import HabitForm from './HabitList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [checked, setChecked] = useState(false); 
  const handleClick = () => setChecked(!checked);
  
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <HabitForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      
      <div key={todo.id} onClick={() => { handleClick();completeTodo(todo.id);}}>
      
      <input  type="checkbox" className="todo-checkbox" />
      
        {todo.text}
      </div>
      <div className='icons'>
      <TiEdit
          title="Edit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <RiCloseCircleLine
          title="Delete"
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;