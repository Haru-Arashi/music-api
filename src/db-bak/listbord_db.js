import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const listbordSchema = new Schema({
    title:String,
    singer:String,
    music:String,
    classfy:String
})
const Listbord = mongoose.model("Listbord", listbordSchema);
const arr=[
    {
        title:"风疯少年",
        singer:"白小白",
        music:"https://www.kugou.com/song/1izdg711.html",
        classfy:"最新"
    },
    {
        title:"男人的眼泪 (烟嗓版)",
        singer:"苏谭谭",
        music:"https://www.kugou.com/song/1j20ficf.html",
        classfy:"最新"
    },
    {
        title:"烟雨楼",
        singer:"洛天依",
        music:"https://www.kugou.com/song/1ixgw716.html",
        classfy:"最新"
    },
    {
        title:"你像是一阵爱情的风",
        singer:"韩小欠",
        music:"https://www.kugou.com/song/1iszzkcd.html",
        classfy:"最新"
    },
    {
        title:"东北风",
        singer:"乌兰图雅",
        music:"https://www.kugou.com/song/1ixazod3.html",
        classfy:"最新"
    },
]


Listbord.create(arr,(err,docs)=>{
    if(err) throw err;
    console.log(docs)
})