const express = require("express")
const app = express();
const router = require("./router")
// const debug = require('debug')('my-application');  nodemon还没配
const bodyParser = require("body-parser")

//解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});
//挂载指定中间件函数
app.use("/api", router);
//使用body-parser获取前端传送过来的数据
app.use(bodyParser.urlencoded({
  extended:true
}))
app.listen(3200, () => {
  console.log('server run at port 3200')
})