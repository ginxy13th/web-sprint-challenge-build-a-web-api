// #### Actions

// | Field       | Data Type | Metadata                                                                                         |
// | ----------- | --------- | ------------------------------------------------------------------------------------------------ |
// | id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
// | project_id  | number    | required, must be the id of an existing project.                                                 |
// | description | string    | up to 128 characters long, required.                                                             |
// | notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action. |
// | completed   | boolean   | used to indicate if the action has been completed, not required                                  |
// get(), update(), insert(), remove()

const express = require('express')
const Actions = require('../data/helpers/actionModel');
const Projects = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req,res) => {
 Actions.get()
 .then(response => {
     res.status(200).json(response)
 })
 .catch(err => {
     res.status(500).json({error: 'There was a problem', err})
 })
})

router.get('/:id', (req,res) => {
    Actions.get(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'something went wrong', err})
    })
})

router.get('/:id/projects', (req,res) => {
    Projects.getProjectActions(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'something went wrong', err})
    })
})

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(response => {
        res.status(201).json({data: response})
    })
    .catch(err => {
        res.status(500).json({message: 'deniiied', err})
    })
})

router.put('/:id', (req, res) => {
    Actions.update(req.body, req.params.id)
    .then(response => {
        res.status(201).json({data: response})
    })
    .catch(err => {
        res.status(500).json({message: 'couldnt change it, nope, not happening', err})
    })
})

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(response => {
        res.status(200).json({data: response})
    })
    .catch(err => {
        res.status(500).json({message: 'you must have this FOREVER HAHAHAHAHA, jk just an error', err})
    })
})

module.exports = router;