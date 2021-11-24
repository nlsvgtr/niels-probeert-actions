const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin"); 

module.exports = {

	mode: 'production',

	entry: {
    "all": './src/index.jsx',
    "base-map": './src/base-map/index.jsx',
  },

	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
    library: ['OpenStadComponents', '[name]'],
    libraryTarget: 'window',
	},

	externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
	},

  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
       filename: '[file].map',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      ignoreOrder: false,
    }),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  
	module: {
		rules: [

			{
				test: /\.json$/,
				loader: "json-loader"
			},

			{
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/openstad-component)/,
        use: {
          loader: "babel-loader"
        }
			},

      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'less-loader',
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
              publicPath: '../'
            }
          },
          {
            loader: "css-loader"
          }
        ]
      },

      { // other images
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              publicPath: '../'
            },
          },
        ],
      },
      
		],
	},
	
}

