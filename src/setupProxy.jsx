const proxy = require('http-proxy-middleware');
const proxyConfig = require('../proxy.config.json');

module.exports = function(app) {
    proxyConfig.forEach(route => {
        app.use(route.context, proxy(route.options));
    });
};
