const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          // Resolves URLs in SASS
          {
            loader: 'resolve-url-loader',
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
};
