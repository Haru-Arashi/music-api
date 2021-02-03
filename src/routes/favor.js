import {
    Favor
} from '../db/db.js'
import express from 'express';
const router = express.Router();

router.post('/up', (req, res) => {
    console.log(req.body)
    // 检查是否重复
    // if (Favor.find({name:req.name})) {
    //     //console.log("已经收藏了！！")
    //     res.json({
    //         status: 500,
    //         message: "已经收藏了！！"
    //     })
    // } 
        // 上传数据
        Favor.create(req.body)
        res.json({
            status: 200,
            message: "收藏成功！！",
            data: req.body
        })
    
})

// 获取数据
router.get('/down',async(req,res)=>{
    const data = await Favor.find()
    //console.log(data)
    res.json({
        status:200,
        message:"数据获取成功",
        data
    })
})

export default router