const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('../server/data/db');

server.get('/api/db', (req, res, next) => {
  res.status(200).send(userData.getDb);
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});

