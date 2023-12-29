import React, { useState } from "react";

function todoList(props) {
  return (
    <li>
      {props.item}
      <span>
        <i
          class="fa-solid fa-trash-can"
          onClick={(e) => {
            props.deleteitem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default todoList;
