/*import { Component } from "react"*/
import axios from 'axios'
import { Tarefa } from './styles'
export default function Component({ id, text, tasks, updateTasks }) {
    async function removeTask(id) {
        await axios.delete(`http://localhost:3001/tasks/${id}`);
        const updatedTasks = tasks.filter(task => task.id !== id);
        updateTasks(updatedTasks);
    }

    return (
        <>
            <Tarefa key={id} onClick={() => removeTask(id)}>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="35" height="35" rx="11.25" fill="#35383E" fillOpacity="0.1" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.5 19.3183L22.9548 24.7731L24.7731 22.9548L19.3183 17.5L24.7731 12.0452L22.9548 10.2269L17.5 15.6817L12.0452 10.2269L10.2269 12.0452L15.6817 17.5L10.2269 22.9548L12.0452 24.7731L17.5 19.3183ZM17.5 19.3183L19.3183 17.5L17.5 15.6817L15.6817 17.5L17.5 19.3183Z" fill="#35383E" fillOpacity="0.25" />
                    <path d="M17.5 19.3183L19.3183 17.5L17.5 15.6817L15.6817 17.5L17.5 19.3183Z" fill="#35383E" fillOpacity="0.25" />
                </svg>
                <p>{text}</p>
            </Tarefa>
        </>
    );
}
