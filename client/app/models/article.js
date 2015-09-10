// Example model


var thinky = require('../../config/thinky'),
  r = thinky.r,
  type = thinky.type;

var Article = thinky.createModel('Article', {
  title: String,
  url: String,
  text: String
});

module.exports = Article;

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');

