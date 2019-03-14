getPosts = async (req, res) => {
    const db = req.app.get('db')
    try{
        const posts = await db.getPosts([req.params.user_id, req.query.posts, req.query.search])
        // console.log(posts)
        if(req.query.userposts === true){
            const filteredPosts = posts.filter((e) => {
                e.user_id !== req.params.user_id
            })
            res.status(200).json(filteredPosts)
            console.log(filteredPosts, 'filtered')
        }
        else{
            res.status(200).json(posts)
            console.log(posts, 'posts')
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}

getSinglePost = async (req, res) => {
    const db = req.app.get('db')
    try{
        const posts = await db.getSinglePost([req.params.post_id])
        res.status(200).json(posts)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
},


module.exports={
    getPosts,
    getSinglePost
}