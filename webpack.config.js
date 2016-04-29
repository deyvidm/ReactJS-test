

module.exports = {
    context: __dirname + "/src",
    entry: "./react.js",
    output: {
        path: __dirname + "/src", 
        filename: "react.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/, 
                loaders: ["style", "css", "sass"]
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: { presets: ["react", "es2015"] }
                
            },
            {
                test: /\.png$/, 
                loader: "url-loader?limit=100000"
            } 

        ]
    }
};
