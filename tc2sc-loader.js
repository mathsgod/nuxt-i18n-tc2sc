tc2sc = require("./tc2sc.js");

module.exports = function (source) {
    //get the component from source

    let module = {
        exports: {}
    }
    let Component = {
        options: {
            __i18n: []
        }
    }

    eval(source);
    module.exports(Component);

    //convert to json
    //eval the json
    if (Component.options.__i18n.length === 0) {
        return source;
    }

    const json = JSON.parse(Component.options.__i18n[0]);

    if (!json.tc) {
        return source;
    }

    //convert tra to simplified chinese
    let sc = Object.assign({}, json.sc ?? {});

    try {
        Object.entries(json.tc).forEach(([key, value]) => {
            if (!sc[key]) {
                sc[key] = tc2sc(value);
            }
        });
    } catch (error) {
        this.emitError(error.message);
        this.callback(error);
    }

    json.sc = sc;

    let value = JSON.stringify(json)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
        .replace(/\\/g, '\\\\')


    let code = ''
    code += `module.exports = function (Component) {
        Component.options.__i18n = Component.options.__i18n || []
        Component.options.__i18n.push('${value.replace(/\u0027/g, '\\u0027')}')
        delete Component.options._Ctor
  }\n`

    return code;

}