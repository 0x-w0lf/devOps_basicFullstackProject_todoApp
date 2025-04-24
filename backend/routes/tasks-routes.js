const express = require('express')
const controller = require('../controllers/tasks-controller.js')

const router = express.Router()

router.get('/', controller.getAll)
router.post('/', controller.create)
router.put('/toggle/:id', controller.toggle)
router.delete('/:id', controller.remove)

module.exports = router
