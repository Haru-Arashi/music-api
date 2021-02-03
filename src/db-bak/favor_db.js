import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const favorSchrma = new Schema({
   id:String,
   name:String,
   singer:String,
   length:String,
   link:String,
   album:String,
   cover:String
})

const Favor = mongoose.model("Favor", favorSchrma);

const arr = {
    id: '600b7e5281da533a1c790158',
    name: '承欢殿',
    singer: '少司命',
    length: '04:16',
    link: 'http://www.kuwo.cn/play_detail/6404026',
    album:"aa",
   cover:"ss"
  }

  Favor.create(arr,(err,docs)=>{
    if(err) return console.log(err)
     console.log(docs)
})