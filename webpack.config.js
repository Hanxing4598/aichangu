var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin' );

var CFG = require('./wbk_config.js');
var manifest = require(CFG.SRC_DIR+'manifest.json');

var cfg_plugins = [
    new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
	  new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
	  new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
				mangle: {
					except: ['$super', '$', 'exports', 'require', 'module', '_']
				},
				compress: {
					warnings: false
				},
				output: {
					comments: false,
				}
		}),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: manifest
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:'vendors',
    //   chunks:['vendors']
    // })
];

var cleanFileArr = [];

function scan_entry_init(){
    console.log('init==========start');
    for(var n in CFG.scanHtml){
        var name = n;
        cleanFileArr.push('resource/js/'+n+'.*.js'); 
        cleanFileArr.push('resource/css/'+n+'.*.css');
        var entry = CFG.scanHtml[n];
        CFG.cfg_entry[name] = CFG.SRC_DIR + 'wbk/' + name + '.wbk.js';
        var chunks = [];
        if(entry.lib){
            chunks = chunks.concat(entry.lib);
        }
        chunks.push(name);
        cfg_plugins.push(
            new HtmlWebpackPlugin({
                mobile: true,
                serviceRootPath:CFG.serviceRootPath,
                tpls:entry.tpl ? entry.tpl : null,
                dll:CFG.serviceRootPath + '/resource/js/lib/lib.'+manifest.name.split('_')[1]+'.js',
                inject : entry.inject==1 ? false : true,
                title : entry.title&&entry.title.length > 0 ? entry.title : '',
                template: path.resolve(CFG.SRC_DIR, CFG.path.view, entry.html),
                filename: path.join(CFG.DIST_DIR, 'WEB-INF/templates/'+entry.html),
                chunks: chunks
            })
        );
    }

    //添加清空旧文件
    cfg_plugins.push(
      new CleanWebpackPlugin(
        cleanFileArr,　 //匹配删除的文件
        {
            root: CFG.DIST_DIR,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
        }
      ));
    console.log('init==========end');
}

scan_entry_init();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     webpack run
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
module.exports = {
  watch:true,
  entry: CFG.cfg_entry,
  output: {
     publicPath:CFG.serviceRootPath+'/resource/',
     filename: 'js/[name].[chunkhash:8].js',
     path: CFG.DIST_DIR+'resource/'
  },
  module : {
          loaders: [
              {test: /.js$/, loader: ['babel-loader']},
              {test: /\.(png|jpg)$/,loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'},/*解析图片*/
              //{test: /.css/, loader: ExtractTextPlugin.extract({use: ['css-loader']})},/*解析less, 把less解析成浏览器可以识别的css语言*/
  		        {test: /.less|.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader',use: ['css-loader','less-loader']})},/*解析css, 并把css变成文件通过link标签引入*/
              {
                  test: /\.(jpe?g|png|gif|svg)$/i,
                  loader: "url-loader?limit=8192&name=images/[name]_[hash].[ext]?[hash]"
              },
              { test: /\tpl\.html$/, loader: "string" },
              { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
              { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
              { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
              { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
          ]
   },
   plugins:cfg_plugins
};