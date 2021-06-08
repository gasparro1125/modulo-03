const HtmlWebpackPlugin =require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin }= require("clean-webpack-plugin");
const path = require("path");

module.exports={
    context: path.resolve(__dirname,"src"),
    resolve:{
        extensions:[".js",".ts",".tsx"],
    },
    entry: {
        app:"./index.tsx",
        vendorStyles: "../node_modules/bootstrap/dist/css/bootstrap.css",
    },
    output:{
        filename:"[name].[chunkhash].js",
        path: path.resolve(__dirname,"dist"),
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                        MiniCssExtractPlugin.loader,
                    {
                        loader:"css-loader",
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                        MiniCssExtractPlugin.loader,
                    {
                        loader:"css-loader",
                        options:{
                            modules:{
                                exportLocalsConvention:"camelCase",
                                localIdentHashPrefix: "my-custom-hash",//optional
                            },
                        },
                    },
                    {
                        loader:"sass-loader",
                    },
                ],
            },
            {
                test:/\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            sriptLoading: "blocking",
            hash:true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: "eval-source-map",
    devServer:{
        port: 8081,
        stats: "errors-only",
    },
};