var jsonServer = require('json-server');
var server = jsonServer.create();
var path = require('path');
var router = jsonServer.router(path.join(__dirname, 'db.json'));
var middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use(router);

server.listen(3000, function () {
  console.log('JSON Server is running')
});
