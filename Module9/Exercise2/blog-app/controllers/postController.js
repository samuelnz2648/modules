const Post = require("../models/postModel");

exports.createPost = (req, res) => {
  const newPost = new Post(req.body);
  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
};

exports.getPosts = (req, res) => {
  Post.find()
    .populate("author", "name email")
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json(err));
};

exports.likePost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.likes += 1;
      return post.save();
    })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
};

exports.commentPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.comments.push({ author: req.body.author, text: req.body.text });
      return post.save();
    })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
};
