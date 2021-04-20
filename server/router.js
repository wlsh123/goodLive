const express = require("express");
//创建路由对象
const router = express.Router();
const url = require("url")
const homehotData = require("./data/home/homehot1")
const homehotData2 = require("./data/home/homehot2")
const searchData = require('./data/search')
const detailData = require('./data/detail')
const commentData = require('./data/comment')

router.get('/homehot1', (req, res)=>{
  const city = url.parse(req.url, true).query.city;
  // console.log(city);
  if (city==='北京') {
    res.send(homehotData2.hot1)
  } else {
    res.send(homehotData.hot1)
  }
})
router.get('/homehot2', (req, res) => {
  const city = url.parse(req.url, true).query.city;
  if (city === '北京') {
    res.send(homehotData2.hot2)
  } else {
    res.send(homehotData.hot2)
  }
})
router.get('/search',(req,res)=>{
  //url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query。
  //第二个参数为true，query属性会生成一个对象，如果为false, 则返回url对象上的query属性会是一个未解析，未解码的字符串，默认为false
  const {keywords, city, page} = url.parse(req.url,true).query;
  console.log('keywords='+keywords,'city='+city,'page='+page)
  res.send(searchData);
})

// 详情接口
router.get('/detail', (req,res)=>{
  const { id } = url.parse(req.url, true).query;
  // console.log('ID'+id)
  res.send(detailData)
})
// 评论接口
router.get('/comment',(req,res)=>{
  const { id } = url.parse(req.url, true).query;
  res.send(commentData)
})
module.exports = router; 