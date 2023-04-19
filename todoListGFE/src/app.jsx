import React, { useState } from 'react';
// key id
let id = 0;

const initialTasks = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' }
];
export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTasks, setNewTasks] = useState('');

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <div>
        <input
          aria-label="Add new task"
          type="text"
          placeholder="Add your task"
          value={newTasks}
          onChange={event => {
            // input value will be set to setNewTasks
            setNewTasks(event.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              // intialTasks array will be concated with value of newTasks
              setTasks(tasks.concat(
                {
                  id: id++,
                  label: newTasks.trim()
                }
              ));
              setNewTasks('');
            }}>
            Submit
          </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button
              onClick={() => {
                // filters tasks that correlates with the button and resets state
                setTasks(
                  tasks.filter(task => task.id !== id)
                );
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
