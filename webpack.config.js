const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      App: path.resolve(__dirname, 'src/App/'),
      Display: path.resolve(__dirname, 'src/components/Display/'),
      Header: path.resolve(__dirname, 'src/components/Header/'),
      History: path.resolve(__dirname, 'src/components/History/'),
      Menu: path.resolve(__dirname, 'src/components/Menu/'),
      Constants: path.resolve(__dirname, 'src/constants/'),
      Keypad: path.resolve(__dirname, 'src/containers/Keypad/'),
      Home: path.resolve(__dirname, 'src/pages/Home/'),
      Redux: path.resolve(__dirname, 'src/redux/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
      Settings: path.resolve(__dirname, 'src/pages/Settings/'),
      Styles: path.resolve(__dirname, 'src/Styles/index'),
      ControlPanel: path.resolve(__dirname, 'src/containers/ControlPanel/'),

    },
  },
};
