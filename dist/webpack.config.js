const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  mode : 'production',
  entry : './js/app.js',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
