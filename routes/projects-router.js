// #### Projects

// | Field       | Data Type | Metadata                                                                    |
// | ----------- | --------- | --------------------------------------------------------------------------- |
// | id          | number    | no need to provide it when creating projects, the database will generate it |
// | name        | string    | required.                                                                   |
// | description | string    | required.                                                                   |
// | completed   | boolean   | used to indicate if the project has been completed, not required            |
// get(), update(), insert(), remove()

const express = require('express')
const Projects = require('../data/helpers/projectModel');
const { validateProjectBody } = require('../middleware')
const router = express.Router();

router.get('/', (req,res) => {
    Projects.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'there was an error', err})
    })
})

router.get('/:id', (req,res) => {
    Projects.get(req.params.id)
    .then(response => {

        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'sorry not today', err})
    })
})

router.post('/', validateProjectBody(), (req, res) => {
    Projects.insert(req.body)
    .then(response =>{
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'nah', err})
    })
})

router.put('/:id', validateProjectBody(), (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(response => {
        res.status(201).json({data: response})
    })
    .catch(err => {
        res.status(500).json({message: 'nope', err})
    })
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(response => {
        res.status(200).json({message: 'its has been done'})
    })
    .catch(err => {
        res.status(500).json({message: 'try again', err})
    })
})

module.exports = router;