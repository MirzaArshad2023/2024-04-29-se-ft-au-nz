"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getUsers = (res) => {
    Models.User.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
    Models.User.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const updateUser = (req, res) => {
    Models.User.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
// deletes user matching ID from params
const deleteUser = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
module.exports = {
    getUsers, createUser, updateUser, deleteUser
};
