module.exports = function (host, port, payload, callback) {

  var cmd = new Buffer(payload, 'hex');

  var net = require('net');
  var client = new net.Socket();

  setTimeout(function() { 

    client.connect(port, host, function() {  
        console.log('Connect to: ' + host + ':' + port);  
        // 建立连接后立即向服务器发送数据，服务器将收到这些数据   
        client.write(cmd);  
        // console.log('Cmd: ' + cmd.toString());  
    });  
      
    // 为客户端添加“data”事件处理函数  
    // data是服务器发回的数据  
    client.on('data', function(data) {  
        console.log('Data: ' + data.toString());  
        // 完全关闭连接  
        client.destroy();  
    });  
      
    // 为客户端添加“close”事件处理函数  
    client.on('close', function() {  
        console.log('Connection closed');  
    });  
    
    callback(null);

  }, 50);
}
