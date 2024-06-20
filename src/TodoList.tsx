import { useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

const initialTodoList: Array<TodoItem> = [
  {
    id: 1,
    text: "Learn React",
    done: false,
  },
  {
    id: 2,
    text: "Create Todo list",
    done: true,
  },
];

export function TodoList() {
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleCheckboxChange = (todo: TodoItem, index: number) => {
    setTodoList(prevTodoList => {
      const newTodoList = [...prevTodoList];
      newTodoList[index] = { ...todo, done: !todo.done };
      return newTodoList;
    })
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} onChange={() => handleCheckboxChange(todo, index)} />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

























/*
import { useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

const initialTodoList: Array<TodoItem> = [
  {
    id: 1,
    text: "Learn React",
    done: false,
  },
  {
    id: 2,
    text: "Create Todo list",
    done: true,
  },
];

export function TodoList() {
  const [todoList, setTodoList] = useState(initialTodoList);

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} onChange={() => setTodoList(prevTodoList => {
            const newTodoList = [...prevTodoList];
            newTodoList[index] = { ...todo, done: !todo.done };
            return newTodoList;
          })} />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
*/
