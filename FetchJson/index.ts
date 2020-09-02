// import axios from 'axios';

// const url = 'http://jsonplaceholder.typicode.com/todos/2';

// axios.get(url).then((response) => {
//   const todo = response.data;
//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;

//   console.log(`
//   todo with id:${id}
//   todo with title:${title}
//   todo with completed:${completed}
//   `);
// });

import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
  // if i am changing the sequence of completed,title,id then i have define the function
  // like id: number, title: string, completed: boolean this wrong u can't change sequence at all
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo with ID: ${id}
    Todo with title: ${title}
    Todo with finished: ${completed}
  `);
};
