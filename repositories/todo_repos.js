const mongoose = require('mongoose')

const Todo = require('../models/todo_model');

const ModelToObj = (Model) => {
    return {
        id: Model.id,
        title: Model.title,
        datetime: Model.datetime,
        completed: Model.completed
    };
}


const RetrieveTodosById = async (id) => {
    if (!mongoose.isObjectIdOrHexString(id)) {
        throw "Invalid ID";
    }
    const todo = await Todo.findById(id);
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    return ModelToObj(todo);
}

const RetrieveTodoAll = async () => {
    const todos = await Todo.find();
    let todo_arr = [];
    todos.forEach((todo) => {
        todo_arr.push(ModelToObj(todo));
    });
    return todo_arr;
}

const RemoveAll = async () => {
    return await Todo.remove();
}

const RemoveById = async (id) => {
    if (!mongoose.isObjectIdOrHexString(id)) {
        throw "Invalid ID";
    }
    const todo = await Todo.findById(id);
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    await Todo.remove(todo);
}

const ModifyById = async (obj) => {
    if (!obj.hasOwnProperty('id')) {
        throw "Object does not contain ID";
    }
    if (!mongoose.isObjectIdOrHexString(obj.id)) {
        throw "Invalid ID";
    }
    const todo = await Todo.findById(obj.id);
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    if (obj.hasOwnProperty('title')) {
        todo.title = obj.title;
    }
    if (obj.hasOwnProperty('datetime')) {
        todo.datetime = obj.datetime;
    }
    if (obj.hasOwnProperty('completed')) {
        todo.completed = obj.completed;
    }
    todo.save();
    return ModelToObj(todo);
}

const Add = async (obj) => {
    if (!obj.hasOwnProperty("datetime") || !obj.hasOwnProperty("title")) {
        throw "Object does not contain title or datetime";
    }
    const todo = new Todo({
        title: obj.title,
        datetime: obj.datetime,
        completed: obj.completed
    });
    todo.save();
    return ModelToObj(todo);
}

module.exports = {
    RetrieveTodosById,
    RetrieveTodoAll,
    RemoveAll,
    RemoveById,
    ModifyById,
    Add
}
