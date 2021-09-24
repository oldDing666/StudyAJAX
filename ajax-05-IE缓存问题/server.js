// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// 针对IE缓存
app.get('/ie', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应
    // response.send('Hello IE');
    response.send('Hello IE - 2');
});

// 4. 监听端口启动服务
app.listen(8000, () => { 
    console.log("服务已经启动，8000端口监听中。。。");
});
