const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool:"none",
    entry: "./src/index.js",
    output: {
        filename:"main.[contentHash].js",
        path: path.resolve(__dirname,"dist")
    },
    plugins:[new HtmlWebpackPlugin({
        template:"./src/template.html"
    })],
    module: {
        rules: [
          {
            test: /\.scss$/,
            //webpack load things in reverse order actully
            use: [
            "style-loader",   //inject css to DOM
            "css-loader",    //convert css to js
            "sass-loader"   //convert scss to css
            ]
          }
        ]
      }
}