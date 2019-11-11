import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.prod.conf';

// const buildConfig = new WebpackConfig('production');

const serverCompiler = webpack(WebpackConfig);

serverCompiler.run((err, stats) => {
    process.stdout.write(stats.toString() + '\n');
});
