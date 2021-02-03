import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const singerSchrma = new Schema({
    name: String,
    cover: String,
    listId:String
})

const Singer = mongoose.model("Singer", singerSchrma);

const arr = [
    {
    name: "张学友",
    cover:"https://img1.kuwo.cn/star/starheads/300/44/49/2029497292.jpg",
    listId:"600ba6442dbc2e19e4c217a3"
    }
]

Singer.create(arr,(err,docs)=>{
    if(err)  throw err;
    console.log(docs)
})