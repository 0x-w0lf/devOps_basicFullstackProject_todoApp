import { API_URL } from '../api/tasks.js'

export const fetchTasks = async () => {
    const res = await fetch(API_URL)
    return await res.json()
}

export const createTask = async (name) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ name })
    })
    return await res.json()
}

export const toggleTask = async (id) => {
    const res = await fetch(`${API_URL}/toggle/${id}`, { 
        method: 'PUT' 
    })
    return await res.json()
}

export const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
}


