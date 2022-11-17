
export default function (moduleOptions) {

    this.extendBuild((config) => {
        config.module.rules.push({
            test: /\.ya?ml$/,
            type: 'javascript/auto',
            loader: require.resolve("./tc2sc-yaml-loader.js"),
        })
    });
}

module.exports.meta = require('./package.json')
