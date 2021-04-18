const express = require("express");
//创建路由对象
const router = express.Router();
const url = require("url")
const homehotData = require("./data/home/homehot1")
const homehotData2 = require("./data/home/homehot2")
const searchData = require('./data/search')

router.get('/homehot1', (req, res)=>{
  res.send(homehotData.hot1)
})
router.get('/homehot2', (req, res) => {
  res.send(homehotData.hot2)
})

module.exports = router;