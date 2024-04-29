import TodoListImg from './assets/logo.png'

import { 
  MainContainer, Container, Titulo,
  LeftContainer, LogoImage,
  HeadLine, SubHeadLine,
  RightContainer, SubTitulo, Tarefa, TaskInfo,
 } from './styles'

export default function App() {
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

          <Tarefa><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="35" rx="11.25" fill="#35383E" fill-opacity="0.1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 19.3183L22.9548 24.7731L24.7731 22.9548L19.3183 17.5L24.7731 12.0452L22.9548 10.2269L17.5 15.6817L12.0452 10.2269L10.2269 12.0452L15.6817 17.5L10.2269 22.9548L12.0452 24.7731L17.5 19.3183ZM17.5 19.3183L19.3183 17.5L17.5 15.6817L15.6817 17.5L17.5 19.3183Z" fill="#35383E" fill-opacity="0.25" />
            <path d="M17.5 19.3183L19.3183 17.5L17.5 15.6817L15.6817 17.5L17.5 19.3183Z" fill="#35383E" fill-opacity="0.25" />
          </svg>
          <p>Tarefa 1</p>
          </Tarefa>
          <TaskInfo type="text" placeholder="Digite sua próxima tarefa aqui..." />
        </RightContainer>
      </Container>
    </MainContainer>
  </>);
}
