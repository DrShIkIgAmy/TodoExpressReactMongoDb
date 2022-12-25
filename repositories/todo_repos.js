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
    return await Todo.remove(id);
}

const ModifyById = async (obj) => {
    if (!mongoose.isObjectIdOrHexString(obj.id)) {
        throw "Invalid ID";
    }
    const todo = await Todo.findById(obj.id);
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    todo.title = obj.title;
    todo.datetime = obj.datetime;
    todo.completed = obj.completed;
    todo.save();
    return ModelToObj(todo);
}

const Add = async (obj) => {
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
