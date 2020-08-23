const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware([process.env.REACT_APP_API],{
        target:process.env.REACT_APP_BASE_URL,//配置要请求的地址
        changeOrigin:true,
        pathRewrite:{
            [`^${process.env.REACT_APP_API}`]:""
        },
    }))
    // app.use(proxy("/manage/api",{
    //     target:"http://admintest.happymmall.com:7000",
    //     changeOrigin:true,
    // }))
};