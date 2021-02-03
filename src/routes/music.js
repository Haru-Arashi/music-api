import express from 'express';
import {
    Home,
} from '../db/db.js'
const router = express.Router();

router.get('/',async (req,res)=>{
    const data = await Home.find((err, docs) => {
            if (err) throw err;
            return docs
        })
    res.json({
        status:200,
        data
    })
})

export default router