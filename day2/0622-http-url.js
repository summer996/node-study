var http = require('http');

//创建一个服务
var server = http.createServer();

//监听req请求事件
server.on('request', (req, res) => {
  console.log(`请求路径是：${req.url}`);
  // res.write('faffd');
  // res.end();
  let url = req.url;
  if (url === '/') {
    res.end('index page');
  } else if (url === '/login') {
    res.end('login index page');
  } else if (url === '/products') {
    var products = [
      {
        name: 'fafd',
        price: 333,
      },
      {
        name: 'ggg',
        price: 333222,
      },
      {
        name: 'hhhh',
        price: 3111133,
      },
    ];
    // 响应的内容只能是二进制或者字符串
    res.end(JSON.stringify(products));
  } else {
    res.end('404');
  }
});

//绑定端口号，启动服务
server.listen(80, () => {
  console.log('服务器启动成功');
});

//已经学习到p10
