const Koa = require('koa');
const mainRouter = require('./routes/main-routes');
const app = new Koa();

app.use(mainRouter.routes());

app.listen(3000);

console.log('Server running on port 3000');
