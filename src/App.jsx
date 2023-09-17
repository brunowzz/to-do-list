import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Check,
  Trash,
  DontHaveItens
} from "./styles.js";

const App = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }]);
      setTask("")
    }
  };

  const handleTask = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: true } : item
    );

    setList(newList);
  };

  const handleRemoveTask = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <Container>
      <ToDoList>
        <Input
          type="text"
          onChange={handleChange}
          placeholder="O que tenho para fazer..."
          value={task}
        />
        <Button onClick={handleSubmit}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem key={item.id} isFinished={item.finished}>
                <Check onClick={() => handleTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => handleRemoveTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <DontHaveItens> Não há itens na lista </DontHaveItens>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
};

export default App;
