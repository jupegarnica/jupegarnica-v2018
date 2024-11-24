var compressor = require("node-minify");

// Using UglifyJS
compressor.minify({
  compressor: "clean-css",
  input: "./css/*.css",
  output: "./dist/bundle.css",
  options: {
    advanced: false, // set to false to disable advanced optimizations - selector & property merging, reduction, etc.
    aggressiveMerging: false, // set to false to disable aggressive merging of properties.
  },
  callback: () => {
    console.log("Css minificado ok");
  },
});
