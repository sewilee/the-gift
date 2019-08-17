// This library allows us to combine paths easily
const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
};

// module.exports = {
//     entry: path.resolve(__dirname, 'src', 'index.js'),
//     output: {
//         path: path.resolve(__dirname, 'output'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: { presets: ['react', 'es2015'] }
//                 }
//             },
//             {
//                 test: /\.scss/,
//                 use: ['style-loader', 'css-loader', 'sass-loader']
//             }
//         ]
//     },
//     devServer: {
//         contentBase: './src',
//         publicPath: '/output'
//     },
// };