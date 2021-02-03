import express from 'express';
import {Song,Mv} from '../db/db.js'
const router = express.Router();

router.get('/music',async (req,res)=>{
    const id = req.query.id
    const data = await Song.findById(id,(err,docs)=>{
        if(err) throw err
        //console.log(docs)
        return docs
    })
    res.json({
        status:200,
        data
    })
})

router.get('/mv',async (req,res)=>{
    const id = req.query.id
    const data = await Mv.findById(id,(err,docs)=>{
        if(err) throw err
        return docs
    })
    res.json({
        status:200,
        data
    })
})
export default router;