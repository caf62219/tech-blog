const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment =require('./Comment');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'bloguser_id'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id'
});


User.hasMany(Comment, {
  foreignKey: 'bloguser_id',
  onDelete: 'CASCADE'
});


BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
})
module.exports = { User, BlogPost, Comment };