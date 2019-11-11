import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.prod.conf';

// const buildConfig = new WebpackConfig('production');

const serverCompiler = webpack(WebpackConfig);

serverCompiler.run((err: Error) => {
    console.log('错误信息:' + err);
});
