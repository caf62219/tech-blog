const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newComment);
    } catch (err) {
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