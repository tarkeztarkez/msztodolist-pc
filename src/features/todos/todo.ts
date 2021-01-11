import { v4 as uuidv4 } from "uuid";
interface TodoProps {
  name: string;
}

export class Todo {
  name: String = "";
  checked: boolean = false;
  id: string;

  constructor({ name }: TodoProps) {
    this.name = name;
    this.id = uuidv4();
  }
}
