var webpackConfig = require("./webpack.config.js")

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            './src/*.spec.js',
            './src/**/*.spec.js',
        ],
        exclude: [],
        preprocessors: {
            "./src/*.spec.js": ["webpack", "sourcemap"],
            "./src/**/*.spec.js": ["webpack", "sourcemap"],
        },
        // webpack configuration
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "errors-only"
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        // TODO: add chrome headless!
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    })
}
