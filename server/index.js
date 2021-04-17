const express = require("express")
const app = express();
const router = require("./router")
const bodyParser = require("body-parser")


app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);
  else
    next();
});

app.use(bodyParser.urlencoded({
  extended:true
}))
app.use("/api", router);

app.listen(3200, ()=>{
  console.log('server run at port 3200')
})