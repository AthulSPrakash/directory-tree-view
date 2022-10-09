const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src/index.ts"),
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "directory-tree-view",
        libraryTarget: "umd"
    },
    module: { 
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                        options: {
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        react: "react"
    },
    resolve: {
        extensions: [".ts", ".tsx"]
    }
}