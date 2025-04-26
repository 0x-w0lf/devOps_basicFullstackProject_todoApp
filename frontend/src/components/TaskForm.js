import { useState } from 'react'

function TaskForm({ onCreate }) {
    const [ newTask, setNewTask ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!newTask.trim()) return
        onCreate(newTask)
        setNewTask('')
    }

    return (
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px'
        }}>
            <input value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                placeHolder="Nueva tarea"
                style={{
                    flex: 1,
                    padding: '10px'
                }}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm
