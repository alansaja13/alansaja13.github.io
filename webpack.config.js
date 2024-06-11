const path = require('path');

module.exports = {
  entry: './src/index.js', // Ruta de tu archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Ruta de salida para los archivos construidos
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ruta a la carpeta raíz de tu proyecto
    },
  },
};
