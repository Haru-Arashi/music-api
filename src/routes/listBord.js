import express from 'express';
import { 
    Listbord,
} from '../db/db.js'
const router = express.Router();

router.get('/',async (req,res)=>{
    const hot = await Listbord.find({classfy:"热门"})
    const newest = await Listbord.find({classfy:"最新"})
    const soar = await Listbord.find({classfy:"飙升"})
    res.json({
        status:200,
        data:{
            hot,
            newest,
            soar
        }
    })
})

export default router;