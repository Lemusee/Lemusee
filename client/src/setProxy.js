const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/", {
            target: "http://www.lemusee.site",
            changeOrigin: true,
        })
    );
};
