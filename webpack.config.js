var path = require("path");

var config = {
    devtool: "inline-source-map",

    // The entry point of the application.
    entry: ["./src/app.tsx"],

    // Location of the bundled file.
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/build/',
        filename:"bundle.js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: [{loader: "source-map-loader"}],
                exclude: "/node_modules"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: "/node_modules"
            }
        ]
    },
};

module.exports = config;