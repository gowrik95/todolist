
import { ChangeEvent, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy Groceries",
      done: false
    },
    {
      id: 2,
      title: "Clean the house",
      done: false
    },
    {
      id: 3,
      title: "Walk the dog",
      done: false
    }
  ]);
  const [counter, setCounter] = useState(0);
  const toggleDone = (e: ChangeEvent<HTMLInputElement>,item: { id: number; title?: string; done: boolean; }) => {
    const indexToUpdate = todos.findIndex((todo) => todo.id === item.id);
    const updatedTodos = [...todos];

    updatedTodos[indexToUpdate].done = !item.done;
    setTodos(updatedTodos); 
    if  (updatedTodos[indexToUpdate].done == true) {
        setCounter(counter + 1);
      } else {
        setCounter(counter - 1);
      }
  };
  

  return (
    <div className="list">
      
      <ul>
      <p>counter:{counter}</p>
        {todos.map((item, index) => (
          <li key={`todo-${index}`}>
           
            <input type="checkbox"  onChange={(e) => toggleDone(e, item)} />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;
