module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    // port: 3000,
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        // ws: true,
        // changeOrigin: true
      },
      '^/util': {
        target: 'http://localhost:8080',
      },
    },
    host: 'localhost',
  },

};
