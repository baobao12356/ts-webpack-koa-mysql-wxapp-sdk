import * as path from 'path';
import * as webpack from 'webpack';
import * as fs from 'fs';

const config: webpack.Configuration = {
    mode: 'production',
    entry: [path.resolve(__dirname, '../src/index.ts')],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    externals: fs.readdirSync('node_modules').filter((x) => {
        return x !== '.bin';
    }),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname, './tsconfig.json')
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()]
};

export default config;
