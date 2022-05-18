const express = require('express');
const app = express();
const mongoose = require('mongoose');
const masri = require('./src/routes/Students');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://hackour:admin@cluster0.tc5bq.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.use('/student', masri);

// app.get('/', (req, res) => {
//   res.send('ok');
// });

// app.get('/test', (req, res) => {
//   res.send({ status: 200, message: 'ok' });
// });

// app.get('/time', (req, res) => {
//   let date = new Date();

//   let time = date.getHours() + ':' + date.getSeconds();

//   res.send({ status: 200, message: time });
// });

// app.get('/hello/:id', (req, res) => {
//   let id = req.params;
//   console.log(id);

//   res.send({ status: 200, message: id });
// });

// app.get('/search', (req, res) => {
//   let s = req.query.s;
//   if (!s) {
//     return res.status(500).send({ status: 500, message: 'error' });
//   }

//   res.send({ status: 200, message: s });
// });

app.listen(port, () => console.log(`listening on port ${port}`));
