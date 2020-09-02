"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/2';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n  todo with id:" + id + "\n  todo with title:" + title + "\n  todo with completed:" + completed + "\n  ");
});
// import axios from 'axios';
// const url = 'http://jsonplaceholder.typicode.com/todos/1';
// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// axios.get(url).then((response) => {
//   const todo = response.data;
//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;
// logTodo(id, title, completed);
// if i am changing the sequence of completed,title,id then i have define the function
// like id: number, title: string, completed: boolean this wrong u can't change sequence at all
// });
// const logTodo = (id: number, title: string, completed: boolean) => {
//   console.log(`
//     Todo with ID: ${id}
//     Todo with title: ${title}
//     Todo with finished: ${completed}
//   `);
// };
