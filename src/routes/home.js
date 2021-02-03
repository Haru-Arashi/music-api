import express from 'express';
import {
    Home,
    Carousel,
    Singer,
    Mv
} from '../db/db.js'
const router = express.Router();

router.get('/', async (req, res) => {
    // 轮播图
    const carousel = await Carousel.find((err, docs) => {
        if (err) throw err;
        return docs
    })
    // 首页音乐
    const homeMusic = await Home
        .find((err, docs) => {
            if (err) throw err;
            return docs
        })
        .skip(0)
        .limit(4)

    // 歌手
    const homeSinger = await Singer.find()

    // mv
    const homeMv = await Mv.find()


    res.json({
        "status": 200,
        "name": "featured",
        "data": {
            "carousel": carousel,
            "homeMusic": homeMusic,
            "homeSinger": homeSinger,
            "homeMv":homeMv
        }
    })
})

export default router;