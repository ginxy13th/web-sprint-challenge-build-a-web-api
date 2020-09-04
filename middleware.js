module.exports = {
    validateProjectBody: () => {
        return (req, res, next) => {
            const body = req.body
            .then(response => {
                if (!body.name || !body.description) {
                    res.status(400).json({message: 'missing some information'})
                } else if (body) {
                    res.status(200).json({message: 'success'})
                    next()
                } else {
                    res.status(404).json({message: 'not found'})
                }
            })
            .catch(err => {
                next(err)
            })
        }
    },

    validateActionBody: () => {
        return (req, res, next) => {
            const body = req.body
            .then(response => {
                if (!body.description || !body.notes || !body.project_id) {
                    res.status(400).json({message: 'missing some information'})
                } else if (body) {
                    res.status(200).json({message: 'success'})
                    next()
                } else {
                    res.status(404).json({message: 'not found'})
                }
            })
            .catch(err => {
                next(err)
            })
        }
    }
}