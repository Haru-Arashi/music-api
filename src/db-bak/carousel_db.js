import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const carouselSchema = new Schema({
    image: String,
    link: String
})
const Carousel = mongoose.model("Carousel", carouselSchema);

const arr = [{
        "image": "https://kwimg2.kuwo.cn/star/upload/57/56/1611024095100_.jpg",
        "link": ""
    },
    {
        "image": "https://kwimg3.kuwo.cn/star/upload/82/50/1610591508982_.jpg",
        "link": ""
    },
    {
        "image": "https://kwimg4.kuwo.cn/star/upload/45/38/1611196198272_.jpg",
        "link": ""
    },
    {
        "image": "https://kwimg3.kuwo.cn/star/upload/65/56/1604927173178_.jpg",
        "link": ""
    },
]

Carousel.create(arr,(err,docs)=>{
    if(err) return console.log(err)
     console.log(docs)
})