var compressor = require("node-minify");

// Using UglifyJS
compressor.minify({
  compressor: "uglifyjs",
  input: "./script/*.js",
  output: "./dist/bundle.js",
  callback: () => {
    console.log("JS minificado ok");
  },
});
