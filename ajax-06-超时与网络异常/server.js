// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 设置响应
        response.send('延时响应');
    }, 3000);
});

// 4. 监听端口启动服务
app.listen(8000, () => { 
    console.log("服务已经启动，8000端口监听中。。。");
});
