const path = require("path")

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "directory-tree-view"
    },
    module: { 
        rules: [
            {
                test: /\.tsx?/,
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
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img/",
                            publicPath: "img/"
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
        extensions: [".ts", ".tsx", ".css"]
    }
}