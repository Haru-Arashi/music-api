import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const songSchrma = new Schema({

        title: String,
        classfy:String,
        cover: String,
        introduction: String,
        author: {
            name: String,
            avatar: String,
        },
        music: [{
            name: String,
            cover: String,
            singer: String,
            length: String,
            link: String,
            album: String
        }]
    

})

const Song = mongoose.model("Song", songSchrma);

const arr = [{
    title: "张学友",
    classfy:"歌手",
    cover: "https://star.kuwo.cn/star/starheads/300/44/49/2029497292.jpg",
    introduction: "张学友（Jacky Cheung），1961年7月10日出生于中国香港，祖籍天津市，中国香港男歌手、演员，毕业于香港崇文英文书院。",
    music: [{
        name: "吻别",
        cover: "https://img4.kuwo.cn/star/albumcover/120/96/53/610609249.jpg",
        length: "05:03",
        link: "http://www.kuwo.cn/play_detail/157908",
        album: "吻别"
    },
    
        {
            name: "最爱",
            cover: "https://img1.kuwo.cn/star/starheads/120/44/49/2029497292.jpg",
            length: "01:12",
            link: "http://www.kuwo.cn/play_detail/160651906",
            album: ""
        }
    
]
}]

// Song.create(arr,(err,docs)=>{
//     if(err) return console.log(err)
//      console.log(docs)
// })

// Song.fin({},{classfy:"歌单",},(err,docs)=>{
//     if(err) return console.log(err)
//      console.log(docs)
// })

// Song.find({classfy:"歌手"}, (err, docs) => {
//     if (err) return console.log(err)
//     console.log(docs)
// })