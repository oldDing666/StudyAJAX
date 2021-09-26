// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.all('/axios-server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许接受所有的请求头信息，可以设置自定义的请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('hello jquery ajax');
    // 设置一个json的响应数据
    const data = { name: 'afuya' };
    response.send(JSON.stringify(data));
});

app.all('/delay', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许接受所有的请求头信息，可以设置自定义的请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('hello jquery ajax');
    // 设置一个json的响应数据
    const data = { name: 'afuya' };
    setTimeout(() => {
        response.send(JSON.stringify(data));
    }, 3000);
});

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中。。。");
});
