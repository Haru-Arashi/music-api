import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// home
const homeSchrma = new Schema({
    title:String,
    cover:String,
    click:Number,
    listId:String
 })
 const Home = mongoose.model("Home", homeSchrma);
 
//  song
const songSchrma = new Schema({
    title:String,
    cover:String,
    introduction:String,
    author:{
        name:String,
        avatar:String,
    },
    music:[
        {
            name:String,
            singer:String,
            length:String,
            link:String
        }
    ]
})
const Song = mongoose.model("Song", songSchrma);

// carousel
const carouselSchema = new Schema({
    image: String,
    link: String
})
const Carousel = mongoose.model("Carousel", carouselSchema);

// singer
const singerSchrma = new Schema({
    name: String,
    cover: String,
    listId:String
})
const Singer = mongoose.model("Singer", singerSchrma);

// mv
const mvSchrma = new Schema({
    title:String,
    author:String,
    cover:String,
    mvLink:String,
    length:String
})
const Mv=mongoose.model("Mv", mvSchrma);

// listbord
const listbordSchema = new Schema({
    title:String,
    singer:String,
    music:String,
    classfy:String
})
const Listbord = mongoose.model("Listbord", listbordSchema);

// favor

const favorSchrma = new Schema({
   _id:String,
   name:String,
   singer:String,
   length:String,
   link:String,
   album:String,
   cover:String
})

const Favor = mongoose.model("Favor", favorSchrma);

// recently
const recentlySchrma = new Schema({
    _id:String,
    name:String,
    singer:String,
    length:String,
    link:String,
    album:String,
    cover:String
 })
 
 const Recently = mongoose.model("Recently", recentlySchrma);

 export{
     Home,
     Song,
     Carousel,
     Singer,
     Mv,
     Listbord,
     Favor,
     Recently
 }