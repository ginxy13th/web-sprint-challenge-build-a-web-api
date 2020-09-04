module.exports = {
    validateProjectBody: () => {
        return (req, res, next) => {
            if (!req.body.name || !req.body.description) {
                res.status(400).json({message: 'missing some information'})
            } else if (req.body) {
                next()
            } else {
                next(err)
            }
        }
    },

    validateActionBody: () => {
        return (req, res, next) => {
            if (!req.body.description || !req.body.notes) {
                res.status(400).json({message: 'missing some information'})
            } else if (req.body) {
                next()
            } else {
                next(err)
            }
        }
    }
}