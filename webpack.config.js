

module.exports = {
  context: __dirname,
  entry: "./react.js",
  output: {
    path: __dirname,
    filename: "react.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/, 
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};