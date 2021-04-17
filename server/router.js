const express = require("express");
const router = express.Router();
const url = require("url")
const homehotData = require("./data/home/homehot1")
const homehotData2 = require("./data/home/homehot2")
const searchData = require('./data/search')

router.get('/homehot1',(req, res)=>{
  const city = url.parse(req,url,true).query.city
  if (city === '北京') {
    res.send(homehotData2.hot1)
  } else {
    res.send(homehotData.hot1)
  }
})

router.get('/homehot2', (req, res) => {
  const city = url.parse(req, url, true).query.city
  if (city === '北京') {
    res.send(homehotData2.hot2)
  } else {
    res.send(homehotData.hot2)
  }
})

// 搜索接口
router.get('/search', (req, res) => {
  res.send(searchData)  
})
module.exports = router;