const service = require('../services/tasks-service.js')

const getAll = async (req, res) => {
    const tasks = await service.getTasks()
    res.json(tasks)
}

const create = async (req, res) => {
    const { name } = req.body
    const task = await service.createTask(name)
    res.status(201).json(task)
}

const toggle = async (req, res) => {
    const { id } = req.params
    const task = await service.toggleTask(id)
    res.json(task)
}

const remove = async (req, res) => {
    const { id } = req.params
    await service.deleteTask(id)
    res.status(204).end()
}

module.exports = {
    getAll,
    create,
    toggle,
    remove
}
