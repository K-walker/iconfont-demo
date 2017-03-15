// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: true ,
  }]);

  webpackConfig.module.loaders.forEach(function (loader, index) {
        if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
            loader.include = /node_modules/;
            loader.test = /\.less$/;
        }
        if (loader.test.toString() === '/\\.module\\.less$/') {
            loader.exclude = /node_modules/;
            loader.test = /\.less$/;
        }
        if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
            loader.include = /node_modules/;
            loader.test = /\.css$/;
        }
        if (loader.test.toString() === '/\\.module\\.css$/') {
            loader.exclude = /node_modules/;
            loader.test = /\.css$/;
        }
    });

  return webpackConfig;
};
