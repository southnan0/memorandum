var webpack = require('webpack');
var path = require('path');

module.exports = {
 entry: {
   app:'./src/index.tsx',
   vendor:['react','react-dom','director']
 },
 devtool: 'source-map',  //inline-source-map
 output: {
   filename: '[name].js',
   path: __dirname + "/dist",
   publicPath: "/dist/",
   pathinfo:true
 },
 devServer: {
    compress: true,
    port: 9093
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