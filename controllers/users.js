const User = require('../models').User;


const index = (req, res) => {
    User.findAll()
    .then(users => {
        res.json(users)
    })
}


const findUser = (req, res) => {
    User.findByPk(req.params.index)
    .then(user => {
        res.json(user)
    })
}

const postUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

const editUser = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.json(updatedUser);
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.json({message: "User deleted"});
    })
}

module.exports = {
    index,
    findUser,
    postUser,
    editUser,
    deleteUser
}