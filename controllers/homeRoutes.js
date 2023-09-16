const router = require('express').Router();
const withAuth = require ('../utils/auth');
const { BlogPost, User } = require('../models');

router.get('/', async (req, res) => {
    try {
      // Get all BlogPost and JOIN with user data
      const blogPostData = await BlogPost.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const blogPosts = blogPostData.map((blogpost) => blogpost.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        blogPosts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  