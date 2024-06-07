import { useState } from 'react';

function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if(!toDo.length) return;
    setToDos(current => [...current, toDo]);
    setToDo("");
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>My To Dos ({toDos.length})</h1>
      <input type="text" placeholder="Write your todo" value={toDo} onChange={onChange} />
      <button>Add To Do</button>
      <ul>
        {
          toDos.map((item, idx) => <li key={idx}>{item}</li>)
        }
      </ul>
    </form>
  );
}

export default ToDoList;
