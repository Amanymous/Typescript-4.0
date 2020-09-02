import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/2';

// axios.get(url).then((response) => {
//   const todo = response.data;
//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;

//   console.log(response.data);
//   console.log(`
//   Todo with ID:${id}
//   tODO WITH TITLE:${title}
//   TODO WITH FINISHED:${completed}
//   `);
// });
axios.get(url).then((response) => {
  const todo = response.data;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
  todo with id:${id}
  todo with title:${title}
  todo with completed:${completed}
  `);
});
