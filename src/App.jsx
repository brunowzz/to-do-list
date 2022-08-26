import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Container, List, InputTask, AddTask, Itens, Trash, Check } from './styles.js'

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: 'Deixar o Like na minha publicação no LinkedIn', finished: true }
  ])
  const [task, setTask] = useState('')

  const ValueTask = (e) => {
    setTask(e.target.value)
  }

  const AddedNewTask = () => {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    } 
  }

  const taskFinished = (id) => {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  const deleteTask = (id) => {
    const newList = list.filter(item => (
      item.id !== id
    ))

    setList(newList)
  }

  return (
    <Container>
      <List>
        <InputTask onChange={ValueTask} placeholder='O que tenho que fazer...' />
        <AddTask onClick={AddedNewTask}> Adicionar </AddTask>
        <ul>
          {list.map((item) => (
            <Itens className='Itens' isFinished={item.finished} key={item.id}>
              <Check onClick={() => taskFinished(item.id)} />
              <li> {item.task} </li>
              <Trash onClick={() => deleteTask(item.id)} />
            </Itens>
          ))}
        </ul>
      </List>
    </Container>
  )
}

export default App
