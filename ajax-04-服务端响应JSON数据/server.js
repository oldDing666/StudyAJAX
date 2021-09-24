// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 设置自定义的请求头信息，需要将app.post改为app.all
// app.all表示可以接收任何类型的请求
app.all('/json-server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许接受所有的请求头信息，可以设置自定义的请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'afuya'
    };
    // 对对象进行字符串的转换
    let str = JSON.stringify(data);
    // 设置响应，send方法中只能接受字符串和buffer，不能接收对象
    // response.send('Hello AJAX! JSON');
    response.send(str);
});

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中。。。");
});
