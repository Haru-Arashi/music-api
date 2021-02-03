import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const mvSchrma = new Schema({
    title:String,
    author:String,
    cover:String,
    mvLink:String,
    length:String
})

const Mv=mongoose.model("Mv", mvSchrma);

const arr={
    title:"孤独",
    author:"G.E.M.邓紫棋",
    cover:"https://img1.kuwo.cn/wmvpic/324/51/63/2551626149.jpg",
    mvLink:"http://www.kuwo.cn/mvplay/152534804",
    length:"03:37"
}

Mv.create(arr,(err,docs)=>{
    if(err) throw err;
    console.log(docs);
})