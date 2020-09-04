module.exports = {
    validateProjectBody: () => {
        return (req, res, next) => {
            const body = req.body
                if (!body.name || !body.description) {
                    res.status(400).json({message: 'missing some information'})
                } else if (body) {
                    res.status(200).json({message: 'success'})
                    next()
                } else {
                    next(err)
                }
        }
    },

    validateActionBody: () => {
        return (req, res, next) => {
            const body = req.body
                if (!body.description || !body.notes) {
                    res.status(400).json({message: 'missing some information'})
                } else if (body) {
                    res.status(200).json({message: 'success'})
                    next()
                } else {
                    next(err)
                }
        }
    }
}