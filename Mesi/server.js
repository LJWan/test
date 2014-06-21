var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started.");
}

exports.start = start;

// var http=require("http");
// var url = require("url");

// function start(route, handle) {
// 	function onRequest(request, response) {
// 	  var pathname = url.parse(request.url).pathname;
// 	  console.log("Requset for " + pathname + " received!");
// 	  route(handle, pathname, response, request);
// 	}

// 	http.createServer(onRequest).listen(3000);
// 	console.log("Server start!");
// }

// exports.start = start;

  

//   回调函数：将函数放在一个方法中，不用在另外一个地方定义，我们不需要
//理会这个请求(传递了函数)中的函数在哪里操作了，反正他就有一个地方做了。

//在C++或C#中，当我们谈到对象，指的是类或者结构体的实例。对象根据他们
//实例化的模板（就是所谓的类），会拥有不同的属性和方法。但在JavaScript里
//对象不是这个概念。在JavaScript中，对象就是一个键/值对的集合 -- 你可以
//把JavaScript的对象想象成一个键为字符串类型的字典。

// Node.js是单线程的。它通过事件轮询（event loop）来实现并行操作，对此，
// 我们应该要充分利用这一点 —— 尽可能的避免阻塞操作，取而代之，多使用非阻塞操作。

// 当进入start  输入数据提交后的过程：
//  收到start请求，路由到start请求，处理start请求；
//  接收到upload请求，收到数据data，路由到upload请求，处理upload请求。
//  所以提交请求后，服务器里有监听事件被触发，监听完，再去路由。
