
export default function (moduleOptions) {

    this.extendBuild((config) => {
        config.module.rules.push({
            test: /\.ya?ml$/,
            type: 'javascript/auto',
            loader: require.resolve("./tc2sc-loader.js"),
        })

        config.module.rules.push({
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            loader: require.resolve("./tc2sc-loader.js"),
        })


    });

}

module.exports.meta = require('./package.json')
