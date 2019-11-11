import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.dev.conf';

// const devConfig = new WebpackConfig('development');

webpack(WebpackConfig).watch(
    {
        aggregateTimeout: 300
    },
    (err: Error) => {
        console.log(err);
    }
);
