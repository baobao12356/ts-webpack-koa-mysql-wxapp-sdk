import * as Koa from 'koa';
import mainRouter from './routes/main-routes';
const app = new Koa();

app.use(mainRouter.routes());

app.listen(3000);

console.log('Server running on port 3000');
