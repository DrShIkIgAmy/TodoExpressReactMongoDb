const todoRepos = require('../db_connection')

const Todo = require('../models/todo_model');

console.log("Intered todo_repos");

const ModelToObj = (Model) => {
    return {
        id: Model.id,
        title: Model.title,
        datetime: Date(Model.datetime),
        completed: Model.completed
    };
}


const RetrieveTodosById = async (id) => {
    const repos = await todoRepos;
    const todo = await repos.findOneBy({
        id: id
    });
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    return ModelToObj(todo);
}

const RetrieveTodoAll = async () => {
    const repos = await todoRepos;
    const todos = await repos.find();
    let todo_arr = [];
    todos.forEach((todo) => {
        todo_arr.push(ModelToObj(todo));
    });
    return todo_arr;
}

const RemoveAll = async () => {
    const repos = await todoRepos;
    await repos.clear();
    return await Todo.remove();
}

const RemoveById = async (id) => {
    const repos = await todoRepos;
    const todo = await repos.findOneBy({
        id: id
    });
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    await repos.remove(todo);
}

const ModifyById = async (obj) => {
    if (!obj.hasOwnProperty('id')) {
        throw "Object does not contain ID";
    }
    const repos = await todoRepos;
    const todo = await repos.findOneBy({
        id: id
    });
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    if (obj.hasOwnProperty('title')) {
        todo.title = obj.title;
    }
    if (obj.hasOwnProperty('datetime')) {
        todo.datetime = (new Date(obj.datetime)).toLocaleString();
    }
    if (obj.hasOwnProperty('completed')) {
        todo.completed = obj.completed;
    }
    await repos.save(todo);
    return ModelToObj(todo);
}

const Add = async (obj) => {
    if (!obj.hasOwnProperty("datetime") || !obj.hasOwnProperty("title")) {
        throw "Object does not contain title or datetime";
    }
    const repos = await todoRepos;
    const todo = {
        title: obj.title,
        datetime: (new Date(obj.datetime)).toLocaleString(),
        completed: obj.completed
    };
    const ret_obj = await repos.save(todo);
    return ModelToObj(ret_obj);
}

module.exports = {
    RetrieveTodosById,
    RetrieveTodoAll,
    RemoveAll,
    RemoveById,
    ModifyById,
    Add
}
