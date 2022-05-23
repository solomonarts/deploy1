const { CreateProxyMiddleware, createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/sign-up/submit',
        {
            target: 'http://localhost:8080/API',
            changeOrigin: true
        })
    )
}