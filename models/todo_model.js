const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";

module.exports = new EntitySchema({
    name: "Todo",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        datetime: {
            type: "varchar"
        }
    }
});