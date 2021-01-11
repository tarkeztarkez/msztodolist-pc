import React, { useState } from "react";

import { Todo } from "./todo";
import { TodoItem } from "./TodoItem";

import { auth, firestore } from "../firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function TodoBox() {
  const [{ uid }, ,] = useAuthState(auth);
  const todosRef = firestore.collection("users").doc(uid).collection("todos");

  const [todos]: [Todo[] | undefined, any, any] = useCollectionData(
    todosRef.orderBy("checked", "asc")
  );

  const [newTodoValue, setnewTodoValue] = useState("");

  const inputChange = ({ target: { value } }: any) => {
    setnewTodoValue(value);
  };

  const onClick = () => {
    const todo = new Todo({ name: newTodoValue });
    todosRef.add({ ...todo });
    setnewTodoValue("");
    console.log(todos);
  };

  const onChecked = (todo: Todo, isChecked: boolean) => {
    todosRef
      .where("id", "==", todo.id)
      .limit(1)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          doc.ref.update({
            checked: isChecked,
          });
        })
      );
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          value={newTodoValue}
          onChange={inputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onClick();
          }}
        />
        <button onClick={onClick}>Add Todo</button>
      </div>
      <ul>
        {todos ? (
          todos.map((todo: Todo) => {
            return <TodoItem key={todo.id} todo={todo} onChecked={onChecked} />;
          })
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
}
