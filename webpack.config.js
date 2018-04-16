const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/VueTypeScriptDDDSample/Primary/Resources/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  }
};
