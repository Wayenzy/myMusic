// 引入express模块
const express = require('express');
// 创建用户路由器
const r = express.Router();
// 引入连接池对象
const pool = require('../pool.js');

r.post('/login',(req,res,next)=>{
    res.send({code:1,msg:'测试'});
});

// 把用户路由器暴露出去
module.exports = r;