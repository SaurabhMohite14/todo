import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handelEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText(" ");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handelEnterPress}
        value={inputText}
      />
      <button
        onClick={() => {
          props.addList(inputText);
          setInputText(" ");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
