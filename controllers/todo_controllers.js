const mongoose = require('mongoose')
const Todo = require('../models/todo_model');
const Repos = require('../repositories/todo_repos')

const PostRemoveById = async (req, res) => {
    Repos.RemoveById(req.body.id);
}

const PostRemoveAll = async (req, res) => {
    Repos.RemoveAll();
    res.statusCode = 200;
    res.send("good");
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
    const TodoList = await Repos.RetrieveTodoAll();
    res.statusCode = 200;
    res.send(TodoList);
}

const PostModifyById = async (req, res) => {
    try {
        Repos.ModifyById(req.body)
        res.statusCode = 200;
        res.send("good");
    } catch (err_msg) {
        res.statusCode = 400;
        res.send(err_msg);
    }
}

const PostAdd = async (req, res) => {
    const newObj = await Repos.Add(req.body);
    res.statusCode = 200;
    res.send(newObj);
}

module.exports = {
    PostRemoveById,
    PostRemoveAll,
    GetRetrieveById,
    GetRetrieveAll,
    PostModifyById,
    PostAdd
}
