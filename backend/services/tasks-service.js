const repo = require('../repositories/tasks-repository.js')

const getTasks = () => repo.getAll()
const createTask = (name) => repo.create(name)
const toggleTask = (id) => repo.toggleCompleted(id)
const deleteTask = (id) => repo.remove(id)

module.exports = {
    getTasks,
    createTask,
    toggleTask,
    deleteTask
}
