const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log('triggered post comment')
    try {
        console.log(req.body)
      const newComment = await Comment.create({
        comment_info: req.body.comment,
        blogpost_id: req.body.blogpost_id,
        bloguser_id: req.session.user_id,
      });
      console.log(newComment);
      res.status(200).json(newComment);
    } catch (err) {
        console.log(err)
      res.sendStatus(500).send(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
   try{
    const deletedComment= await Comment.destroy({
        where: {
            id: req.params.id,
        }
    })
    return res.status(200).json(deletedComment)
} catch (err){
    res.status(500).json(err);
}
})

router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentUpdate = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json(commentUpdate);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports=router