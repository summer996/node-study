//和服务器相关的事
/**
 * 使用node轻松构建一个web服务器
 * 在node中有一个核心服务器，http
 * 这个模块的职责就是帮你创建编写服务器
 */
/**
 * 1、加载http核心模块
 */
var http = require('http');

// 2、使用http.createServer()方法创建一个web服务器
//返回一个server示例
var server = http.createServer();

//3、服务器用来提供对数据的服务
//发请求，接受请求，反馈
//注册request请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，也就是回调函数
/**
 * request请求对象， 请求对象可以用来获取客户端的一些请求信息，例如请求路径
 * response响应对象，可以用来给客户端发送响应消息
 */
server.on('request', function (request, response) {
  console.log(`收到客户端的请求， 请求路径是${request.url}`);
  //response 对象有一个放啊，write可以用来给客户端发送响应数据
  //write可以使用多次，倒是最后一次一定要使用end来结束响应，否则客户端回一直等待
  response.write('hello');

  response.end();
});

//4、启动服务器，绑定端口号
server.listen(3000, () => {
  console.log('服务器启动成功，可以通过http://127.0.0.1:3000/ 来访问');
});
