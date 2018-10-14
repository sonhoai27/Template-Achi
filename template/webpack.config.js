const path = require('path')
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public"
    },
    devtool: "",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        useCache: false
                    }
                }],
                exclude: ['node_modules']
            },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude: [
                path.join(process.cwd(), 'node_modules')
              ] },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    mode: 'production',
    performance: {
        hints: false
    },
    node: {fs: 'empty'}
};