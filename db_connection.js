const Todo = require('./models/todo_model')
const typeorm = require('typeorm')


const createConnection = async () => {
    const connection = await typeorm.createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "Shiki",
        password: "nintendo",
        database: "todosdb",
        synchronize: true,
        entities: [Todo]
      });
    var repos = connection.getRepository("Todo");
    return repos;
}

const repos = createConnection();

module.exports = repos;