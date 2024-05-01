import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import TodoListImg from './assets/logo.png'
import Tarefa from './components/Tarefa'

import {
  MainContainer, Container, Titulo,
  LeftContainer, LogoImage,
  HeadLine, SubHeadLine,
  RightContainer, SubTitulo, //Tarefa, 
  TaskInfo,
} from './styles'

export default function App() {
  const [tasks, setTasks] = useState([])

  const taskText = useRef("");

  useEffect(() => {
    async function listTasks() {
      const { data: taskList } = await axios.get('http://localhost:3001/tasks/')
      setTasks(taskList)
    }
    listTasks()
  }, [])

  // http://localhost:3001/tasks
  async function insertNewTask(event) {
    if (event.key === "Enter") {
      const newText = taskText.current.value;
      const response = await axios.post('http://localhost:3001/tasks/', { text: newText });
      const newTask = { id: response.data.id, text: newText };
      setTasks([...tasks, newTask]);
      taskText.current.value = "";
    }
  }

  return (<>
    <MainContainer>
      <Container>
        <LeftContainer>
          <HeadLine>
            <LogoImage src={TodoListImg} />
            <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
          </HeadLine>
          <SubHeadLine>Adicione ao lado as tarefas que deseja fazer hoje e não pare até ela estar vazia!</SubHeadLine>
        </LeftContainer>
        <RightContainer>
          <Titulo>Minhas Tarefas</Titulo>
          <SubTitulo>Tarefas do dia...</SubTitulo>
          {tasks.map((task) => (
            <Tarefa key={task.id} id={task.id} text={task.text} tasks={tasks} updateTasks={setTasks} />
          ))}

          <TaskInfo type="text"
            placeholder="Digite sua próxima tarefa aqui..."
            onKeyDown={insertNewTask}
            ref={taskText} />
        </RightContainer>
      </Container>
    </MainContainer>
  </>);
}
