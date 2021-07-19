const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//ROUTES

//Gets every post
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message : err});
    }
});

//Gets specific post
router.get('/:postId', async (req,res)=>{
    try{
        const posts = await Post.findById(req.params.postId);
        res.json(posts);
    }catch(err){
        res.json({message : err});
    }
});

//Add a post
router.post('/', async (req,res)=>{
    const post = new Post({
       title: req.body.title,
       description: req.body.description 
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message : err});
    }

})

//Delete a post
router.delete('/:postId',async (req,res)=> {
    try{
        const deletedPost = await Post.remove({_id : req.params.postId})
        res.json(deletedPost);
    }catch(err){
        res.json({message: err})
    }
   
})

//Updates the post

router.patch('/:postId' , async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id : req.params.postId},
            { $set : 
                {
                    title : req.body.title,
                    description : req.body.description
                }
            }
        )
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;