import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Titulo = styled.h1`
    color: black;
    font-size: 40px;
    font-weight: 800;
    line-height: normal;

`

/* Lado Esquerdo */

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 584px;
`

export const LogoImage = styled.img`
    margin-right: 8px;
`

export const HeadLine = styled.div`
    display: flex;
    align-items: center;

    span{
        color: #1F5FA3;
    }
`
export const SubHeadLine = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 28.18px;
    margin-top: 16px;
`


/* Lado Direito */

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: fit-content;
    padding: 45px;
    margin-left: 52px;
    align-items: flex-start;
    gap: 10px;

    border-radius: 45px;
    background: #FFF;
    box-shadow: 0px 40px 100px 0px rgba(0, 0, 0, 0.08), 0px 10px 80px 0px rgba(0, 0, 0, 0.06), 0px 2px 15px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`

export const SubTitulo = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #35383E80;
`

export const Tarefa = styled.div`
    display: flex;
    width: 410px;
    padding: 15px;
    align-items: center;
    gap: 15px;
    border-radius: 22.5px;
    background: rgba(53, 56, 62, 0.05);



    svg{
        background: rgba(53, 56, 62, 0.10);
        padding: 4px;
        width: 35px;
        border-radius: 12.5px;
        height: 35px;
        cursor: pointer;
    }

    p{
        font-family: 'Raleway' sans-serif;
        color: #35383E;
        font-size: 20px;
        font-weight: 700;
    }
`

export const TaskInfo = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 15px 15px 10px 15px;
    gap: 5px;
    width: 410px;
    border: none;
    outline: none;
    border-bottom: 2px solid rgba(53, 56, 62, 0.05);

    color: rgba(53, 56, 62, 0.5);
    font-size: 20px;
    font-weight: 800;
`

