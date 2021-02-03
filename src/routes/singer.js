import express from 'express';
import { 
    Singer,
} from '../db/db.js'
const router = express.Router();

router.get('/',async (req,res)=>{
    const data = await Singer.find()
    res.json({
        status:200,
        data
    })
})

export default router;