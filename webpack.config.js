const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        index: path.resolve(__dirname, "./src/index.js"),
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /(\/node_modules\/|\.spec\.js$)/,
            }
        ]
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        pathinfo: true,
    },

    resolve: {
        extensions: [".js"],
        modules: [
            __dirname,
            path.resolve(__dirname, "./node_modules"),
        ]
    }
}
