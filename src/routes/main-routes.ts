import * as Router from 'koa-router';
const router = new Router();
const user = require('../controllers/common/user');

router.prefix('/api/v1');
router.get('/:appName/user/login', user.login);

export default router;
