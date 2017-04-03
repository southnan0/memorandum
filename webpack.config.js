var webpack = require('webpack');
var path = require('path');

module.exports = {
 entry: {
   app:'./src/index.tsx',
   vendor:['react','react-dom','director']
 },
 devtool: 'inline-source-map',  //inline-source-map
 output: {
   filename: '[name].js',
   path: __dirname + "/dist"
 },
 devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
},
 module: {
   rules: [{
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       test: /\.tsx?$/,
       loader: 'awesome-typescript-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
 },*/
    plugins:[
      new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.js"})
    ]

};