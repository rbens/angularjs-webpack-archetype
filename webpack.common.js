const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const buildDir = `dist`;
const appDir = `app`;

module.exports = {
    entry: {
        vendor: `./${appDir}/vendors.js`,
        app: `./${appDir}/app.js`
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, buildDir)
    },
    optimization:{
      splitChunks:{
          chunks : 'all'
      }
    },
    plugins: [
        new CleanWebpackPlugin([buildDir]),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    /**
     * - for style : ccs-loader, less-loader or sass-loader
     * - for json : json-loader
     * - for images and fonts : file-loader
     * - for js : using ES6 with babel
     * - for  Dependency injection : ng-annotate
     */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'ng-annotate-loader'},
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }]
            }
        ]
    }
};		
