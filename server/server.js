const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const PORT = 3000;

//db connection

//body parser
app.use(bodyParser.json());

//defining route handler to apiRouter
app.use('/api', apiRouter);

//Start server
module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
