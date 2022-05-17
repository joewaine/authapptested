// // vue.config.js
// module.exports = {
//     //...
//     configureWebpack: {
//       output: {
//         filename: "./js/js.js"
//       }
//     },
//     chainWebpack: config => {
//       config.optimization.delete("splitChunks");
//     },
//     css: {
//       extract: {
//         filename: "/css/css.css"
//       }
//     }
//   }



module.exports = {
  pluginOptions: {
    compression:{
      brotli: {
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          level: 11,
        },
        minRatio: 0.8,
      },
      gzip: {
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_classes.scss";
          @import "@/assets/styles/_globals.scss";
        `
      }
    }
  }
}


