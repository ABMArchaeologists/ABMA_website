// module.exports = {
//   publicPath: '/ABMAWebsite/',
//   configureWebpack: {
//     resolve: {
//       alias: {
//          '@': require('path').resolve(__dirname, 'src')
//       }
//     }
//    },
//   devServer: {
//     port: 8080,
//     open: true
//   }
// }

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    port: 8080,
    open: true
  }
}


