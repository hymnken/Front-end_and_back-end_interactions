const express = require('express');
const app = express();

//挂载路由
// app.get('/user', (req, res) => {
//   res.send({ name: 'zs', age: 20, gender: 'nan' });
// });


// app.get('/', (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// app.get('/user/:id', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });
// app.get('/user/:id/:name', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });
// app.get('/', (req, res) => {
//   res.send('hello world.');
// });
// app.post('/', (req, res) => {
//   res.send('Post Request.')
// })




// app.listen(80, () => {
//   console.log('http://127.0.0.1');
// });

// const express = equire('express');

// const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/', (req, res) => {
  res.send('hello worldpost');
});

app.listen(80, () => {
  console.log('okokokokokokokokokok');
});
