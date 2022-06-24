const { Router } = require("express");
const { commentsController } = require("../controllers/comment.controller");

const router = Router();

router.post("/comment", commentsController.postCommentsByNews);

router.delete("/comment", commentsController.deleteComments);

router.get("/commentt", commentsController.getCommentsByNews);

module.exports = router; 
