const path    = require('path');
const webpack = require('webpack');

var CFG = require('./wbk_config.js');

const vendors = [
    'jquery',
    'angular'
];

var src_path = CFG.DIST_DIR+'resource/js/lib/';
module.exports = {
    output: {
        path: src_path,
        filename: '[name].[chunkhash:8].js',
        library: '[name]_[chunkhash:8]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_[chunkhash:8]',
            //context: src_path,
            mangle: {
                except: ['webapp', '$', 'utils','angular']
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
        //     mangle: {
        //         except: ['webapp', '$', 'utils','angular']
        //     },
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false,
        //     }
        // })
    ]
};