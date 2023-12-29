import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div>
      <TodoInput addList={addList} />
      <h1>Todo List</h1>
      <hr />
      {listTodo.map((listItem, i) => {
        return (
          <TodoList
            key={i}
            item={listItem}
            deleteitem={deleteListItem}
            index={i}
          />
        );
      })}
    </div>
  );
}

export default App;
