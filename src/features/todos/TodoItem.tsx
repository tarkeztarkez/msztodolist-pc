import { Todo } from "./todo";

interface TodoItemProps {
  todo: Todo;
  onChecked: Function;
}

export const TodoItem = (props: TodoItemProps) => {
  function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChecked(props.todo, e.target.checked);
  }

  return (
    <li>
      <span
        style={
          props.todo.checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.todo.name}
      </span>{" "}
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={handleChecked}
      />
    </li>
  );
};
