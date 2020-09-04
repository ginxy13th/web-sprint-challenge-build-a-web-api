// #### Projects

// | Field       | Data Type | Metadata                                                                    |
// | ----------- | --------- | --------------------------------------------------------------------------- |
// | id          | number    | no need to provide it when creating projects, the database will generate it |
// | name        | string    | required.                                                                   |
// | description | string    | required.                                                                   |
// | completed   | boolean   | used to indicate if the project has been completed, not required            |

const express = require('express')
const Projects = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req,res) => {

})

router.get('/:id', (req,res) => {

})

router.post('/', (req, res) => {

})



router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;