const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
         {
           test: /\.raw$/,
           loader: 'arraybuffer-loader',
         }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}