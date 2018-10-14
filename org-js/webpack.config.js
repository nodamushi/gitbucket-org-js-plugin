const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
    path : path.join(__dirname,"../src/main/resources/org_js")
  }
};
