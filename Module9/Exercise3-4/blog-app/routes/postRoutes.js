const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/posts", postController.createPost);
router.get("/posts", postController.getPosts);
router.post("/posts/:id/like", postController.likePost);
router.post("/posts/:id/comment", postController.commentPost);

module.exports = router;
