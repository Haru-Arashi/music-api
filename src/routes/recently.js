import {
    Recently
} from '../db/db.js'
import express from 'express';
const router = express.Router();

router.post('/up', (req, res) => {
    console.log(req.body)

    // 上传数据
    Recently.create(req.body)
    res.json({
        status: 200,
        message: "上传成功！！",
        data: req.body
    })

})

// 获取数据
router.get('/down', async (req, res) => {
    const data = await Recently.find()
    //console.log(data)
    res.json({
        status: 200,
        message: "数据获取成功",
        data
    })
})

export default router