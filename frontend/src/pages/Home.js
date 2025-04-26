import { useEffect, useState } from 'react'
import { fetchTasks, 
    createTask, 
    toggleTask, 
    deleteTask } 
from '../services/taskService.js'
import TaskForm from '../components/TaskForm.js'
import TaskItem from '../components/TaskItem.js'

function Home() {
    const [tasks, setTasks] = useState([])
    
    useEffect(()=>{
        fetchTasks().then(setTasks)
    }, [])

    const handleCreate = async (name) => {
        const task = await createTask(name)
        setTasks([task, ...tasks])
    }

    const handleToggle = async (id) => {
        const updated = await toggleTask(id)
        setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: updated.completed } : t )))
    }

    const handleDelete = async (id) => {
        await deleteTask(id)
        setTasks(tasks.filter((t) => t.id !== id))
    }

    return (
        <div style={{
            maxWidth: 500, 
            margin: '50px auto',
            fontFamily: 'sans-serif'
        }}>
            <h1> ToDo App </h1>
            <TaskForm onCreate={handleCreate}/>
            <ul style={{
                listStyle: 'none',
                padding: 0
            }}>
                {tasks.map((task) => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    )
}
export default Home
