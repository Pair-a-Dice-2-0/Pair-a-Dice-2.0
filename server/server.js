const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = 3000;

//db connection

//body parser
app.use(bodyParser.json());

//defining route handler to apiRouter
app.use('/api', apiRouter);

// Catch all route handler
app.use((req, res) => res.sendStatus(404));

// Create event listener for socket connection
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

//Start server
module.exports = http.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
