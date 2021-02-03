import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const homeSchrma = new Schema({
   title:String,
   cover:String,
   click:Number,
   listId:String
})

const Home = mongoose.model("Home", homeSchrma);

// 插入数据
// const user = new User({
//     name:'Tom',
//     age:'19'
// })

// user.save((err,result)=>{
//     if(err) return console.log(err)
//     console.log(result);
// });

const arr = {
   "title":"最适合清晨和闲暇时候听的歌",
   "cover":"https://img1.kuwo.cn/star/userpl2015/6/93/1489181349076_373763406_500.jpg",
   "click":"1.2"
}

// Home.create(arr,(err,docs)=>{
//     if(err) return console.log(err)
//      console.log(docs)
// })

// 查询数据
Home.find((err,docs)=>{
    if(err) return console.log(err)
    console.log(docs)
})

// User.find({name:'lisi'}, (err,docs)=>{
//     if(err) return console.log(err)
//      //console.log(docs)
//      for(let item of docs)
//         console.log(item._id)
// })

// 查找并更新
// User.findOneAndUpdate({name:'lisi'},{listId:'6009607a5580ca191c040782'},(err,docs)=>{
//     if(err) return console.log(err)
//     console.log(docs)
// })

// User.updateMany({name:'Tom'},{listId:'6009607a5580ca191c040782'},(err,docs)=>{
//     if(err) return console.log(err)
//         console.log(docs)
// })

// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));