module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "./app/scripts/bundle.js"
    },
    devtool:'source-map',
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};