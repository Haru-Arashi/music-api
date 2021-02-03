import express from 'express';
import { 
    Mv,
} from '../db/db.js'
const router = express.Router();

router.get('/',async (req,res)=>{
    const data = await Mv.find();
    res.json({
        status:200,
        data
    })
})
export default router