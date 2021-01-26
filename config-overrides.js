const { override, 
  fixBabelImports, 
  addWebpackResolve,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
const path=require("path");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // 二次配置
  addWebpackResolve({
    extensions:[".js",".json",".jsx"]
  }),
  // 给文件起别名
  addWebpackAlias({
    assets:path.resolve(__dirname,"./src/assets")
}),
addDecoratorsLegacy(),
);
