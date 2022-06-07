const CopyPlugin = require("copy-webpack-plugin");
const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const { ProvidePlugin } = require("webpack");


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        //vue: "vue/dist/vue.runtime.esm.js",
        fs: "html5-fs",
      },
      extensions: ["*", ".js", ".vue", ".json", ".ts"],
      fallback: {
        // browser polyfills
        assert: require.resolve("assert"),
        //buffer: require.resolve('buffer'),
        //console: require.resolve('console-browserify'),
        //constants: require.resolve('constants-browserify'),
        crypto: require.resolve("crypto-browserify"),
        //domain: require.resolve('domain-browser'),
        //events: require.resolve('events'),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        //punycode: require.resolve('punycode'),
        //process: require.resolve('process/browser'),
        querystring: require.resolve("querystring-es3"),
        stream: require.resolve("stream-browserify"),
        //string_decoder: require.resolve('string_decoder'),
        //sys: require.resolve('util'),
        //timers: require.resolve('timers-browserify'),
        //tty: require.resolve('tty-browserify'),
        url: require.resolve("url"),
        util: require.resolve("util"),
        //vm: require.resolve('vm-browserify'),
        zlib: require.resolve("browserify-zlib"),
      },
    },
    externals: ["worker_threads", "ws", "perf_hooks", "child_process"], // exclude nodejs
    plugins: [
      new ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "**.{js,wasm}",
            context: path.resolve(
              __dirname,
              "node_modules/monero-javascript/dist"
            ),
            to: path.resolve(__dirname, "dist/js")
          },
          {
            from: "**.{js,wasm}",
            context: path.resolve(
              __dirname,
              "node_modules/monero-javascript/dist"
            ),
            to: path.resolve(__dirname, "dist/")
          },
        ],
      }),
    ]
  }
})
