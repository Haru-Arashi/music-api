import express from 'express';
import homeRouter from './routes/home.js'
import singerRouter from './routes/singer.js'
import listbordRouter from './routes/listBord.js'
import detailsRouter from './routes/details.js'
import mvRouter from './routes/mv.js'
import musicRouter from './routes/music.js'
import favorRouter from './routes/favor.js'
import recentlyRouter from './routes/recently.js'
import bodyParser from 'body-parser';
const app = express()

// 跨域请求
app.all('*',  (req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// bodyParser中间件
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// 首页
app.use('/home', homeRouter)
// 歌手页面
app.use('/singer', singerRouter)
// 排行榜
app.use('/listbord', listbordRouter)
// mv页面
app.use('/mv', mvRouter)
// 首页歌单
app.use('/music', musicRouter)
// 详情页面
app.use('/details', detailsRouter)
// 收藏
app.use('/favor', favorRouter)
// 历史记录
app.use('/recently', recentlyRouter)
app.listen(3000, () => console.log('App is running!!'))