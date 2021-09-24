// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 设置自定义的请求头信息，需要将app.post改为app.all
// app.all表示可以接收任何类型的请求
app.all('/server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许接受所有的请求头信息，可以设置自定义的请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应
    response.send('Hello Express!');
});

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中。。。");
});
