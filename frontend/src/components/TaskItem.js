function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <space onClick = { () => onToggle(task.id) }
                style = {{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
            >{task.name} 
            </space>
            <button onClick={()=> onDelete(task.id)}>❌</button>
        </li>
    )
}

export default TaskItem
