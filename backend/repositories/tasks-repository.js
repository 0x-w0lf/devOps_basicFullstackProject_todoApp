const db = require('../config/db.js')

const getAll = async () => {
    const result = await db.query('SELECT * FROM tasks ORDER BY created_at DESC')
    return result.rows
}

const getTaskById = async (id) => {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id])
    return result.rows[0]
}     

const create = async (name) => {
    const result = await db.query('INSERT INTO tasks (name) VALUES ($1) RETURNING *', [name])
    return result.rows[0]
}

const toggleCompleted = async (id) => {
    const result = await db.query('UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *', [id])
    return result.rows[0]
}

const remove = async (id) => {
    await db.query('DELETE FROM tasks WHERE id = $1',[id])
}

module.exports = {
    getAll,
    getTaskById,
    create,
    toggleCompleted,
    remove
}
