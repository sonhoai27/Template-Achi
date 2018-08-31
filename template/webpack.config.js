const path = require('path')
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public"
    },
    devtool: "cheap-module-source-map",

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

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    mode: 'production',
    performance: {
        hints: false
    },
    devServer: {
        port: 8080,
        open: true,
        proxy: {
          "/api/": "http://localhost:8080/Achi/api/"
        }
      }
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 100,
    //         maxSize: 0,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         automaticNameDelimiter: '.',
    //         name: true,
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: 1
    //             },
    //             default: {
    //                 minChunks: 3,
    //                 priority: 10,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // }
};