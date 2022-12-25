const mongoose = require('mongoose')
const Todo = require('../models/todo_model');
const Repos = require('../repositories/todo_repos')

const PostRemoveById = async (req, res) => {
    try{
        await Repos.RemoveById(req.body.id);
        res.statusCode = 200;
        res.send("Todo was removed");
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

const PostRemoveAll = async (req, res) => {
    try {
        await Repos.RemoveAll();
        res.statusCode = 200;
        res.send("All todos was removed");
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

const GetRetrieveById = async (req, res) => {
    try{
        const TodoInst = await Repos.RetrieveTodosById(req.body.id);
        res.send(TodoInst);
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

const GetRetrieveAll = async (req, res) => {
    try{
        const TodoList = await Repos.RetrieveTodoAll();
        TodoList.sort((el1, el2) => {
            return el1.datetime - el2.datetime;
        });
        res.statusCode = 200;
        res.send(TodoList);
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

const PostModifyById = async (req, res) => {
    try {
        await Repos.ModifyById(req.body)
        res.statusCode = 200;
        res.send("Todo");
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

const PostAdd = async (req, res) => {
    try {
        const newObj = await Repos.Add(req.body);
        res.statusCode = 200;
        res.send(newObj);
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

module.exports = {
    PostRemoveById,
    PostRemoveAll,
    GetRetrieveById,
    GetRetrieveAll,
    PostModifyById,
    PostAdd
}
