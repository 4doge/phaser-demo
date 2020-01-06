import webpack from 'webpack';
import path from 'path';

const pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(pathToPhaser, 'dist/phaser.js');

const config: webpack.Configuration = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /phaser\.js$/,
        loader: 'expose-loader?Phaser',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser,
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    publicPath: '/dist/',
    host: '127.0.0.1',
    port: 8080,
    open: true,
  },
};

export default config;
