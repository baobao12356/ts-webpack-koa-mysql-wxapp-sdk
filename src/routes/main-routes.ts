const Router = require('koa-router');
const router = new Router();

router.get('/*', (ctx) => {
    console.log('ss');
    ctx.body = 'Hello World!';
});

module.exports = router;
