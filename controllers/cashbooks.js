const Cashbook = require('../models').Cashbook;


const index = (req, res) => {
    Cashbook.findAll()
    .then(users => {
        res.json(users)
    })
}


const find = (req, res) => {
    Cashbook.findByPk(req.params.index)
    .then(list => {
        res.json(list)
    })
}

const post = (req, res) => {
    Cashbook.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

const edit = (req, res) => {
    Cashbook.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.json(updatedUser);
    })
}

const deleteList = (req, res) => {
    Cashbook.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.json({message: "list deleted"});
    })
}

module.exports = {
    index,
    find,
    post,
    edit,
    deleteList
}